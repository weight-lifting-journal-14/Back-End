module.exports = (exercise) => {
    const errors = [];
    if (!exercise.name) {
        errors.push('your going to need to provide a name there buddy')
    }
    if (!exercise.region) {
        errors.push('we need the region of the body that that exercise will target')
    }
    return {
        isSuccessful: !Boolean(errors.length),
        errors
    }
    
};