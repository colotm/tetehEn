/* eslint-disable max-len */
import React from 'react';
import {FormattedMessage} from 'react-intl';
import {APP_NAME} from '../../brand';

import penIconURL from './pen/pen.png';
import penInsetIconURL from './pen/pen-small.svg';
import turboBuilderDevIcon from './penguinmod/turbobuilder-dev.png';


// jg: default icon if you are too lazy to make one and you want me to make one instead lololololololol
// gsa: ololololololo
import defaultExtensionIcon from './penguinmod/extensions/placeholder.png';

const urlParams = new URLSearchParams(location.search);

const IsLocal = String(window.location.href).startsWith(`http://localhost:`);
const IsLiveTests = urlParams.has('livetests');

const menuItems = [
    {
 
        extensionId: 'https://turbowarp-pen-extension-demo--natunay.on.websim.com/pen-extension.js',
        iconURL: penIconURL,
        insetIconURL: penInsetIconURL,
        tags: ['graphics'],
        description: (
            <FormattedMessage
                defaultMessage="An drawing the pencils to blocks."
                description="Description for the 'Pen' extension"
                id="gui.extension.pen.description"
            />
        ),
        featured: true
    },
 
    {
        // not really an extension, but it's easiest to present it as one
        name: 'TurboBuilder - Dev Branch',
        href: 'https://turbobuilder-dev.vercel.app/',
        extensionId: 'special_turboBuilderDev',
        iconURL: turboBuilderDevIcon,
        description: 'Publicly available developer branch, with the latest features.',
        credits: 'Started by JeremyGamer13, continued by jwklong',
        tags: ['extcreate'],
        featured: true
    }
    ];
    extras.forEach(ext => {
        menuItems.push(ext);
    });
}

export default menuItems;
