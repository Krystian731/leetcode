function isEmpty(obj: Record<string, any> | any[]): boolean {
    if(Object.values(obj).length != 0 )
        return false;
    else return true;
};
