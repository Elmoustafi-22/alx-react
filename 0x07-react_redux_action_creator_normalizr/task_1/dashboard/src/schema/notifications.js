import * as notificationData from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notifications", {
    author: user,
    context: message,
});

const normalized = normalize(notificationData, [notification])

function getAllNotificationsByUser(userId){
    return notificationData.filter(notification => notification.author.id === userId).map(notification => notification.context)
}

export default getAllNotificationsByUser;
export {normalized}