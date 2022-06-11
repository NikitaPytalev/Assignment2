const up = async payload => {
    const fileManager = payload.source;
    await fileManager.updateCurrentPath('../');
} 

export default up;