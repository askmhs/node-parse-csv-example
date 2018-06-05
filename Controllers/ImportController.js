import fs from "fs";
import csvJSON from "csvjson";

export class ImportController {

    async import(file) {
        const data = fs.readFileSync(file.path, {encoding: 'utf8'});
        return csvJSON.toObject(data, {
            delimiter: ',',
            quote: '"'
        });
    }
}