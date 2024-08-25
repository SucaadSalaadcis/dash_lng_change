import i18n from 'i18next';
import React from 'react'

export default function Buttons() {
    return (
        <div>
            <button className="btn btn-secondary"
                onClick={() => {
                    i18n.changeLanguage("en");
                }}
            >english</button>
            <button className="btn btn-primary ml-5"
                onClick={() => {
                    i18n.changeLanguage("so");
                }}
            >Somali</button>
        </div >
    )
}
