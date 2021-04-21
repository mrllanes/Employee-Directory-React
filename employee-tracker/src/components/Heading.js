import React from "react";

export default function Heading() {
    return (
        <div>
            <div className="container">
                <h1 className="text-center">
                    Welcome to the Employee Directory
                </h1>
                <blockquote className="blockquote text-right">
                    <p className="mb-0">React...Isn't it magical?</p>
                    <footer className="blockquote-footer">
                        L. McNeel in{" "}
                        <cite title="Trilogy Cohort 42">Trilogy Cohort 42</cite>
                    </footer>
                </blockquote>
            </div>
        </div>
    );
}
