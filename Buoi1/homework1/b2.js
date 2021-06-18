const checkStr = (str) => {
    const temp = str.split('');
    for (let i = 0; i < temp.length ; i++) {
        if(temp[i] !== temp[temp.length - i - 1])
        return false
    }
    return true;
}