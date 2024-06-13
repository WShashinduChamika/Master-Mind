const mongoose = require('mongoose')

const bcrypt = require('bcrypt')

const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  },
  confirmPassword: {
    type: String,
  },
  role: {
    type: String,
    required: true
  },
  mobileNo: {
    type: String,
    required: true,
  },
  image: {
    type: String
  }
})

//create static signup method
userSchema.statics.signup = async function (name, email, password, confirmPassword, role, mobileNo) {
  //console.log(name+' '+confirmPassword)
  //validatiion
  console.log("role is " + mobileNo)

  if (!name || !email || !mobileNo || !password || !confirmPassword) {
    throw Error("All fields must be filled")
  }

  if (!validator.isEmail(email)) {
    throw Error("Email is not valid")
  }


  const exist = await this.findOne({ email })
  if (exist) {
    throw Error('Email is already use')
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong")
  }
  if (!(password == confirmPassword)) {
    throw Error("Password can not be verified")
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ name, email, password: hash, role, mobileNo })

  return user
}

//create static login mehtod
userSchema.statics.login = async function (email, password) {

  if (!email || !password) {
    throw Error("All fields must be filled")
  }

  if (!validator.isEmail(email)) {
    throw Error("Email is not valid")
  }

  const user = await this.findOne({ email })

  if (!user) {
    throw Error("The user is invalid")
  }

  const match = await bcrypt.compare(password, user.password)

  if (!match) {
    throw Error("Password is incorrect")
  }

  return user
}

//Update user details
userSchema.methods.updateDetails = async function (name, email, role, mobileNo, fileName) {
  if (!validator.isEmail(email)) {
    throw new Error("Email is not valid");
  }

  const emailExists = await mongoose.model('User').findOne({ email, _id: { $ne: this._id } });
  if (emailExists) {
    throw new Error('Email is already in use');
  }

  this.name = name
  this.email = email
  this.role = role
  this.mobileNo = mobileNo
  if (fileName) {
    this.image = fileName;
  }
  await this.save()

  return this;
}

userSchema.methods.updatePassword = async function (password, confirmPassword) {

  if (password) {
    if (!validator.isStrongPassword(password)) {
      throw new Error("Password is not strong enough");
    }
    if (password !== confirmPassword) {
      throw new Error("Passwords do not match");
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(password, salt);
  }
  await this.save()
  return this
}

module.exports = mongoose.model("User", userSchema)
