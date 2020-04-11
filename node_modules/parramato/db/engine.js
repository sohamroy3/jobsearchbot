'use strict'
function dataAccessFunction(model) {
    return new Promise(async function (resolve, reject) {
        try {
            if (model) {
                if (model.dbOpsType) {
                    switch (model.dbOpsType) {
                        case 'create': resolve(await listenerCreate(model))
                            break;

                        case 'delete': resolve(await listenerDelete(model))
                            break;

                        case 'createOrUpdate': resolve(await listenerCreateOrUpdate(model))
                            break;

                        case 'read': resolve(await listenerReadByFilter(model))
                            break;

                        case 'count': resolve(await listenerCountByFilter(model))
                            break;

                        case 'update': resolve(await listenerUpdate(model))
                            break;

                        case 'readById': resolve(await listenerReadById(model))
                            break;

                        default: reject('Wrong Operation Type : Supported types are create , read , update and delete.')
                            break;
                    }
                } else {
                    return reject('Model dbOps type undefined.')
                }
            } else {
                return reject('Model undefined.')
            }
        }
        catch (e) {
            return reject(e);
        }
    })

}


// function to create or update a record
function listenerCreateOrUpdate(model) {
    return new Promise((resolve, reject) => {
        if (typeof model.schema === 'function' && model.query && model.data) {
            // model.schema.findOneAndUpdate(
            //     model.query, // find a document with that filter
            //     {$set:model.data}, // document to insert when nothing was found
            //     { new: true}, // options
            //     (err, data) => {
            //         if (err) { return reject(err); }
            //         return resolve(data);
            //     })
            model.schema.find(model.query, (err, data) => {
                if (err) { return reject(err); }
                if(data&&data.length>0){
                    model.schema.findByIdAndUpdate(data[0]._id, {$set: model.data}, {new:true},(err, data) => {
                        if (err) { return reject(err); }
                        return resolve(data);
                    })
                }
                else{
                    new model.schema(model.data).save((err, data) => {
                        if (err) { return reject(err); }
                        return resolve(data);
                    })
                }
            }).limit(1).skip(0)

        } else {
            return reject('Model data incomplete.')
        }
    });
}

// function to create a new document
function listenerCreate(model) {
    return new Promise((resolve, reject) => {
        if (typeof model.schema === 'function' && typeof model.data === 'object') {
            new model.schema(model.data).save((err, data) => {
                if (err) { return reject(err); }
                return resolve(data);
            })
        } else {
            return reject('Model data incomplete.');
        }
    })
}

// function to delete a document by id
function listenerDelete(model) {
    return new Promise((resolve, reject) => {
        if (typeof model.schema === 'function' && model.id) {
            model.schema.findByIdAndRemove(model.id, (err, data) => {
                if (err) { return reject(err); }
                return resolve(data);
            })
        } else {
            return reject('Model data incomplete.')
        }
    });
}


// function to count by given data
function listenerCountByFilter(model) {
    return new Promise((resolve, reject) => {
        if (typeof model.schema === 'function') {
            model.schema.count(model.data, (err, data) => {
                if (err) { return reject(err); }
                return resolve(data);
            }).limit(model.readLimit).skip(model.offset)
        } else {
            return reject('Model data incomplete.')
        }
    });
}

// function to read by given data
function listenerReadByFilter(model) {
    return new Promise((resolve, reject) => {
        if (typeof model.schema === 'function' && typeof model.readLimit === 'number' && typeof model.offset === 'number') {
            // console.log(model)
            model.schema.find(model.data, (err, data) => {
                if (err) { return reject(err); }
                // console.log(data)
                return resolve(data);
            }).limit(model.readLimit).skip(model.offset)
        } else {
            return reject('Model data incomplete.')
        }
    });
}

// function to read by document id
function listenerReadById(model) {
    return new Promise((resolve, reject) => {
        if (typeof model.schema === 'function' && model.id) {
            model.schema.findById(model.id, (err, data) => {
                if (err) { return reject(err); }
                return resolve(data);
            })
        } else {
            return reject('Model data incomplete.')
        }
    });
}

// function to update document
function listenerUpdate(model) {
    return new Promise((resolve, reject) => {
        if (typeof model.schema === 'function' && typeof model.data === 'object' && model.id) {
            model.schema.findByIdAndUpdate(model.id, { new: true, $set: model.data }, (err, data) => {
                if (err) { return reject(err); }
                return resolve(data);
            })
        } else {
            return reject('Model data incomplete.')
        }
    });
}

// exports
module.exports = dataAccessFunction
