import log from '../logger';

interface obj {
    [key: string]: any;
}

let exampleObject: obj = {
    test: "1",
    test1: "2"
};

log(exampleObject, 'hey', 'there');
