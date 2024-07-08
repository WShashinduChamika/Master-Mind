export const fadein = (direction,delay)=>{
    return {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
            x: direction === 'left' ? 60 : direction === 'right' ? -60 : 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type:'tween',
                duration: 0.5,
                delay: delay,
                ease: [0.25,0.25,0.25,0.75]
            }
        }
    }
}