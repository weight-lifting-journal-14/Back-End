module.exports = (exercise) => {
    const errors = [];
    if (!exercise.name) {
        errors.push('your going to need to provide a name there buddy')
    }
    if (!exercise.region) {
        errors.push('we need the region of the body that that exercise will target')
    }
    if (!exercise.reps) {
        errors.push('we are going to need the number of reps that will be completed in each set')
    }
    if (!exercise.sets) {
        errors.push('How many sets of the repitions needs to also be inputed')
    }
    return {
        isSuccessful: !Boolean(errors.length),
        errors
    }
    
};