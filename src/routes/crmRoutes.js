import { addNewContact,
        getContacts,
        getContactWithID,
        updateContact,
        deleteContact
} from "../controllers/crmControllers";


const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) =>{
            //middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getContacts)

        // Post endpoint
        .post(addNewContact);

    app.route('/contact/:contactID')
        // Get a specific contact
        .get(getContactWithID)

        // updating specific contact
        .put(updateContact)

        // deleting a specific contact
        .delete(deleteContact);
}

export default routes;