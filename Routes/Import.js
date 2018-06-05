import {ImportController} from "../Controllers/ImportController";

module.exports = server => {

    server.post("/import", async (req, res) => {
        try {
            // res.json(req.files);
            const result = await new ImportController().import(req.files.file);
            res.json(result);
        } catch (exception) {
            res.status(500);
            res.json(exception.message);
        }
    });
};