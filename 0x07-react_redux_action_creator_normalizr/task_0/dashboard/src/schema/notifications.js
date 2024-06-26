import * as notificationData from "../../../../notifications.json";

export default function getAllNotificationsByUser(userId) {
    return notificationData.filter((notification) => notification.author.id === userId.Id).map((notification) => notification.context);
}