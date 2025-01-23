import { ComponenteCrime } from "../model/ComponenteCrime.js";
import { Palpite } from "../model/Palpite.js";

const idHandler = {
    [ComponenteCrime.name]: 0,
    [Palpite.name]: 0
}

function getNextId(resource) {
    return idHandler[resource] !== undefined ? ++idHandler[resource] : false;
}

export { getNextId }