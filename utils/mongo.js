function replaceIdInObject(doc) {
    const { _id, ...updatedObject } = { ...doc, id: doc._id.toString() };

    return updatedObject;
}

export function replaceIdInArray(array) {
    console.log('🚀 ~ replaceIdInArray ~ array:', array);
    const updatedArr = array.map((item) => {
        const { _id, ...updatedObj } = { id: item._id.toString(), ...item };

        return updatedObj;
    });

    return updatedArr;
}
