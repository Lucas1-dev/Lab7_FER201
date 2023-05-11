import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import './News.css';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default function News() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="black"
                indicatorColor="primary"
                aria-label="tabs example"
            >
                <Tab label="YESTERDAY" id="tab-0" value={0} />
                <Tab label="TODAY" id="tab-1" value={1} />
                <Tab label="TOMORROW" id="tab-2" value={2} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <img src='https://e0.365dm.com/22/12/1600x900/skysports-championship-things-to-know_5997470.jpg?20221215142006' alt='yesterday' />
                <h5  className='font-bold'>Top two take a break to focus on FA Cup</h5>
                <p className='text-left'>Burnley's relentless march towards the Premier League will have to wait now until after the FA Cup. They are in cup action this weekend, but won't be too worried with a 19-point gap over third-placed Middlesbrough with just nine games to go. Promotion should be sealed shortly after the international break.</p>
                <h5 className='font-bold'>Nine games kicking off at 3pm on Saturday</h5>
                <p className='text-left'>The bulk of the Championship drama takes place at 3pm on Saturday, with nine games kicking off at that time. Middlesbrough will hope to keep the promotion race alive, knowing victory over Preston would cut the gap on Sheffield United in second to three points. Luton, a point behind Boro, head to Sunderland as they aim to keep their own automatic dreams alive.</p>
                <h5 className='font-bold'>Watch free Championship highlights</h5>
                <p className='text-left'>Should you miss your team play, or just want to catch up, then remember we have free match highlights from all Sky Bet Championship fixtures available for you shortly after the full-time whistle blows.</p>
                <h5 className='font-bold'>Championship predictions</h5>
                <p className='text-left'>Sky Sports duo Simeon Gholam and David Prutton take a look ahead at the weekend games, predicting the result of every fixture to try and work out who will win, lose or draw.</p>
                <h5 className='font-bold'>Swansea face Bristol City on Sunday</h5>
                <p className='text-left'>The end of the Championship weekend action, and final game before the international break, takes us to South Wales on Sunday, where a free-falling Swansea host Bristol City. The Swansea can barely buy a point right now, and have slipped to just eight points above the relegation zone. While Bristol City only need one more win to take them past 50 for the season. Kick-off is at 12.30pm.</p>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <img src='https://e0.365dm.com/23/03/1600x900/skysports-juventus-freiburg_6091155.jpg?20230316195542' alt='today' />
                <h5 className='font-bold'>Juventus defeated 10-man Freiburg 2-0 to advance 3-0 on aggregate in the Europa League quarter-finals on Thursday.</h5>
                <p className='text-left'>Dusan Vlahovic scored from the penalty spot right on half-time after Freiburg defender Manuel Gudel was sent off for using his hands to deny Adrien Rabiot a goal. The Italian side controlled the match in the second half and extended their lead five minutes into added time through Federico Chiesa.</p>
                <h5 className='font-bold'>Juventus not trying to offload Pogba, says CFO</h5>
                <p className='text-left'>Juventus are not trying to end the contract of injury-troubled midfielder Paul Pogba, Chief Football Officer Francesco Calvo said on Thursday, assuring the club are looking forward to his return to full fitness. The French World Cup winner rejoined Juventus in July 2022 following his departure from Manchester United, and has had less than 40 minutes of playing time, coming on as a substitute against Torino and AS Roma in Serie A. "He's the first one who is not happy with this year and with this latest injury," Calvo told Sky Sports ahead of Juve's Europa League clash at Freiburg. "When it comes to great players everything is emphasised, for better or for worse. I've read big headlines and that Juventus would like to offload him. Absolutely not. "He arrived here when he was 19, for him it's a family but we are a family that demands a lot. We hope to have him back as soon as possible. "Pogba, 30, first joined Juventus in 2012 and won four Serie A titles, two Italian Cups before joining United after the 2015-16 season. "We believe so much in Pogba, otherwise we wouldn't have signed a four-year contract," Calvo added.</p>
                <h5 className='font-bold'>Analysis: Sheikh Jassim will do what it takes to buy Man Utd</h5>
                <p className='text-left'>Sky Sports News chief reporter Kaveh Solhekol: "Sheikh Jassim made a bid before the soft deadline a month ago. The Glazer family liked that offer enough to say they would go through to the second stage of the process. "Sheikh Jassim's representatives have now been to the club's training ground to meet some of the senior executives and to have a look at what they would actually be buying. "What they're going to be told is having seen the facilities, they will be set another 10 days to make another bid. I am very confident they will make that second bid and a source in the US has told me 'there should be no doubt at all that Sheikh Jassim wants to be the owner and custodian of Manchester United.</p>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <img src='https://e0.365dm.com/23/02/1600x900/skysports-championship-predictions_6044719.jpg?20230202165251' alt='tomorrow' />
                <h5 className='font-bold'>Blackpool vs Coventry, Saturday 3pm</h5>
                <p className='text-left'>Where on earth did that come from? Out of nowhere, Blackpool come up with their performance of the season to thrash QPR 6-1. They are still four points off safety, but what a boost that will have been to their confidence.Coventry have had a frustrating week. Two draws in two winnable games has halted their push towards the top six. And after midweek this game has a very different look. I think this will be a draw.</p>
                <h5 className='font-bold'>Middlesbrough vs Preston, Saturday 3pm</h5>
                <p className='text-left'>That was a disappointing midweek result for Middlesbrough. They dropped points at home to Stoke, and saw Sheffield United win the following night so the gap is up to six points. This is a chance to close that, but Preston are in good form and still harbour their own slim play-off hopes after back-to-back wins. Despite their midweek setback, I'll still back Boro to win here.</p>
                <h5 className='font-bold'>Millwall vs Huddersfield, Saturday 3pm</h5>
                <p className='text-left'>Millwall have bolstered their spot in the play-offs with two good wins this week, and have a great chance to further enhance their position against a Huddersfield side that can't buy a win. Neil Warnock hasn't quite had the desired impact thus far, but they did get a good draw in midweek, which might be something to build on. But this should be a home win.</p>
                <h5 className='font-bold'>QPR vs Birmingham, Saturday 3pm</h5>
                <p className='text-left'>What an absolute disaster that was for QPR. Just after they had picked up a first win under Gareth Ainsworth, they go in and put in that performance at Blackpool. The boss will have some work to do to pick them up from that. Birmingham were disappointing at Watford in midweek, and still need to pick up a few more points to ensure their safety this season. I think one of those points will come here.</p>
            </TabPanel>
        </Box>
    );
}