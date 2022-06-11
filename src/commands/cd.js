const cd = async payload => {
    const fileManager = payload.source;
    const inputPath = payload.args[0];

    return await fileManager.updateCurrentPath(inputPath);
} 

export default cd; 