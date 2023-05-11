import React from 'react'
import { Collapsible, CollapsibleItem, Icon } from 'react-materialize'
import './About.css'

export default function About() {
    return (
        <Collapsible accordion id='about-page'>
            <CollapsibleItem
                expanded={false}
                header="NAME"
                icon={<Icon>subtitles</Icon>}
                node="div" className='text-left'
            >
                Only player's name. nothing more.
            </CollapsibleItem>
            <CollapsibleItem
                expanded={false}
                header="NATION"
                icon={<Icon>place</Icon>}
                node="div" className='text-left'
            >
                The country that player is from. This also indicates player's nationality. The information taken from official source.
            </CollapsibleItem>
            <CollapsibleItem
                expanded={false}
                header="COST"
                icon={<Icon>attach_money</Icon>}
                node="div" className='text-left'
            >
                The cost recommended to sign with that player. This number can be altered as the market changes. These numbers are just for references, the actual may be different.
            </CollapsibleItem>
            <CollapsibleItem
                expanded={false}
                header="CLUB"
                icon={<Icon>supervisor_account</Icon>}
                node="div" className='text-left'
            >
                The club shows the name of team that player is currently in. If this field is null, this player is not in any team any easy to recruit.
            </CollapsibleItem>
            <CollapsibleItem
                expanded={false}
                header="TOP PLAYER"
                icon={<Icon>stars</Icon>}
                node="div" className='text-left'
            >
                The player that is in top player list has better skills performed in matches and is expected to develop more. As a result, the cost to recruit them is also higher than others.
            </CollapsibleItem>
            <CollapsibleItem
                expanded={false}
                header="INFO"
                icon={<Icon>description</Icon>}
                node="div" className='text-left'
            >
                More information about the player. This may contain additional information like usual numbers of jersey, their achievements gotten, leagues they attend. This may also contains their hobbies or likes and dislikes, which some people find unpleasant when reading.
            </CollapsibleItem>
            <CollapsibleItem
                expanded={false}
                header="VIDEO LINKED IN DETAIL"
                icon={<Icon>video_library</Icon>}
                node="div" className='text-left'
            >
                This is trailer or a short cut of the player or their highlights in years of playing. If you want to watch full match or information, you can search for it on the Internet.
            </CollapsibleItem>
        </Collapsible>
    )
}
