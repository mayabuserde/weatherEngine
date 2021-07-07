import React from "react";

export default function FormattedDate(props) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();

    return (
        <div>{days[props.date.getDay()]}, {hours}:{minutes}</div>
    )
}