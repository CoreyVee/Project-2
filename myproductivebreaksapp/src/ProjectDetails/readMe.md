# Project

## Project Schedule

| Day | Deliverable | Status |
|---|---|---|
|Day 1 | Project Description & Draft Wireframe/ Priority Matrix/Timeline | Complete|
| Day 2 | Submit Project Proposal & Finalize Wireframe changes/ Create React App components | In progress |
| Day 3 | Complete Home and Navigation/ Create form and link to API request| Incomplete |
| Day 4| Finalize favorites list/ debug API call errors/ Work on non-mvp features| Incomplete |
| Day 5 | Revise for errors in morning / Celebrate at Deployment party | Incomplete |

## API

[Bored API](https://www.boredapi.com/)

ex: 
```
{
  "activity": "Practice coding in your favorite lanaguage",
  "type": "recreational",
  "participants": 1,
  "price": 0,
  "link": "",
  "key": "7096020",
  "accessibility": 0.1
}
```

## Project Description

My Productive Breaks App is designed to fetch random activity randomly or by categories of the users choosing, that provide a mentally stimulating break. Users will be able to add activities to their favorites list by toggling a favorites checkbox. Favorited activities will be saved to a list for the user so that they can return and learn more in the future. Non-mvp features include art to add a visual component to the activities, as well as a 15 minute timer so that users can enjoy a short productive break.

## Wireframe

MVP features are written in black, non-MVP features are written in blue. To the right is a chart of components and their features. All dom rendering will occur through REACT app:

![Wireframe](./AppWireframe.png)

![MobileWireframe](./MobileWireframe.png)
## Time/Priority Matrix

## Components 

| Components | Description |
|---|---|
| App | Set up app and components with React Router |
| Header | Renders header and nav |
| Footer | Footer renders along with nav |
| Main.js | Connects and renders all components |
| Form | Makes fetch request to Bored API and returns activity |
| Favorites | Toggles favorited activities and appends them to list |
| Related Activities | Suggests other activities based of your favorited acitivities |
| Tips Page | Provides tips for making the most of your breaks so you can stay productive|
| Art | Renders visual component for activities |

Rough estimate on features and their difficulty, with estimated time projections.

MVP
| User-story | Estimated Time | Actual Time|
|---|---|---|
| Home-page| 2 hours | -- |
| Nav (header & footer) | 3.5 hours | -- |
| API request form | 3 hours | -- |
| Favorites Toggle | 2.5 hours | -- |
| Favorites List | 2 hours | -- |
| Debug/ Finalize MVP | 2.5 hours | -- |
| Total MVP time | Projected: 15.5 hours | Actual : -- |

non-MVP
| User-story | Estimated Time | Actual Time|
|---|---|---|
| Favorites page | 2.5 hours | -- |
| Img Components | 4 hours | -- |
| Related Activities | 5 hours | -- |
| Tips Page | 3 hours | -- |
| Total non-MVP time | Projected: 14.5 hours | Actual : -- |

## MVP
Requirements
- Professional README 
- Completed Project Worksheet/Proposal
- Git repository with a link to the hosted project.
- Frequents commits dating to beginning of project (Min. of 15 commits)
- Proper indentation and casing for JS and CSS 
- No console.logs or commented out codes in final version
- Only uses React for DOM Manipulation
- No preloaded create-react-app files or code.


## Additional Libraries
Supporting libraries and thier role in the project
|Library/Resources|Role|
|---|---|
| API | [Bored API](https://www.boredapi.com/) |
| TBD | TBD |
| TBD | TBD |
| TBD | TBD |

## Code Snippet

Brief code snippet of functionality that you are proud of an a brief description:

## Issues and Resolutions

Project Issues and resolutions go here

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object