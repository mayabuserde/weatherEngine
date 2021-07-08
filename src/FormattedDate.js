import React from "react";

export default function FormattedDate(props) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    //use UTC methods because timestamp is given in UTC timezone.
    let hours = props.date.getUTCHours();
    let minutes = props.date.getUTCMinutes();

    if(minutes < 10) {
        minutes = `0${minutes}`;
    }

    if(hours < 10) {
        hours = `0${hours}`;
    }

    return (
        <div>{days[props.date.getUTCDay()]}, {hours}:{minutes}</div>
    )
}