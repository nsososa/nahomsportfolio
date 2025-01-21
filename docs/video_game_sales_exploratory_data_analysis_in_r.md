**Introduction**
============

Hey everyone and welcome to my first article on Medium! I've been learning a lot from the courses I've been taking with the main tool used being R. What better way to apply some of my learnings than a project on a game data set?

> Data found on: [Kaggle](https://www.kaggle.com/datasets/gregorut/videogamesales) Original data source: [VGChartz](https://www.vgchartz.com/)

**Initial Assumptions**
-------------------

Based on my background and love for video games, I have a few assumptions I expect to see during and after performing this analysis:

- **Nintendo** will be the dominant developer/publisher for *a lot* of years. It's impressive how Nintendo manages to never significantly change their business model or way of developing games but still continue to release popular games that appeal to a vast audience.
- **PlayStation 2** was massive. There will be a spike in the year 2000/2001 right when it was released and it will be the top console platform.
- **Grand Theft Auto: V** is a timeless game released in 2013, that's still widely popular to this day. I expect to see that reflected in the data from 2013--2016, since the data set only records data until 2016 (there are points for 2017--2020 but only 4).
- **Wii Sports** will have a lot of sales, maybe even the top selling game, higher than the likes of Call of Duty, GTA V, and Super Mario. Wii Sports was innovative. It was the first of its kind and brought family gaming of all ages right there into the home.
- **World of Warcraft** was a revolutionary game that changed the MMO scene. I expect it to be one of the top games across the board.
- **Atari** was a big contributor to the game market crash of the 1980s. I expect to see a drastic drop in sales during this time period.
  
**Questions**
---------

1. Which company had the top sales?
2. Is there a correlation between platform and sales?
3. Which game sold the most and why?
4. Which platform(s) are most people using?
5. Who is publishing the most games? Does that necessarily mean they have the most sales?

Let's get right into it by first loading necessary libraries and the data set:

```R
# libraries used
library(ggplot2)
library(dplyr)
library(ggrepel)  
library(dlookr)
library(skimr)
library(plyr)
library(ggpubr)
library(gganimate)
library(ggcorrplot)
library(DataExplorer)
library(lubridate)

# load and view first 10 rows of data set
vgsales <- read.csv("vgsales.csv", header = TRUE)
head(vgsales)
```
*Quick note: I reference packages throughout the code. For example, the glimpse() function will be denoted dplyr::glimpse() since it's from the dplyr package. Shoutout to *[*Kinga on LinkedIn*](https://www.linkedin.com/feed/update/urn:li:activity:7054072731482390529?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7054072731482390529%29)* for this tip!*