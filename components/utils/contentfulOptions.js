import React from "react";
import ReactDOM from 'react-dom';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const Bold = ({ children }) => <span className="bold">{children}</span>;
export const Italic = ({ children }) => <span className="isItalic">{children}</span>;
export const Underline = ({ children }) => <span className="underline">{children}</span>;
export const Text = ({ children }) => <p className="text-left mb-15">{children}</p>;
export const Header_1 = ({ children }) => <h4 class="textColorPrimary toolsTitle schadow textCenter">{children}</h4>;
export const Header_6 = ({ children }) => <p class="text-right">{children}</p>;
export const Code = ({ children }) => <span dangerouslySetInnerHTML={{ __html: children }}></span>;

export const Options = {
    renderMark: {
        [MARKS.BOLD]: text => <Bold>{text}</Bold>,
        [MARKS.ITALIC]: text => <Italic>{text}</Italic>,
        [MARKS.UNDERLINE]: text => <Underline>{text}</Underline>,
        [MARKS.CODE]: text => <Code>{text}</Code>,
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
        [BLOCKS.HEADING_1]: (node, children) => <Header_1>{children}</Header_1>,
        [BLOCKS.HEADING_6]: (node, children) => <Header_6>{children}</Header_6>,
        [BLOCKS.EMBEDDED_ASSET]: (e) => <p>
            <img
                className="articleImg"
                src={e.data.target.fields.file.url} />
        </p>
    }
};

export const ContentfulClient = require('contentful').createClient({
    space: "sa1dyqzyb7zu",
    //space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    //accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
    accessToken: "Fr2U2Ge3ToiX7PTNOjilHDg5CUpVR4JijHkYQ3VAM04"
})

export const getLessons = (data) => data
    .filter(e => e.fields.price !== undefined)
    .map(e => {
        return {
            id: e.fields.id,
            title: e.fields.title,
            price: e.fields.price.toFixed(2),
            media: e.fields.media.fields.file.url,
            image: e.fields.image.fields.file.url,
            description: documentToReactComponents(e.fields.description, Options)
        }
    })
    .sort((a, b) => a.id - b.id);
