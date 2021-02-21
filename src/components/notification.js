import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/confirm/dist/PNotifyConfirm.css";

const notification = {
    isActive: false,

    notify() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        error({
            text: "Too many matches found. Please enter a more specific query",
            width: '300px',
            height: '100px',
            transition: 'cubic-bezier(.04,.74,.94,.53)',
            delay: 3000,
        });
    },
}

export default notification;