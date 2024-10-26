import { ComponenteCrime } from "../model/ComponenteCrime";

const idHandler = {
    [ComponenteCrime.name]: 0,
}

function getNextId(resource) {
    return idHandler[resource] !== undefined ? ++idHandler[resource] : false;
}

export { getNextId }