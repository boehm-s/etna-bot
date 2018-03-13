# etna-bot

As the [wiki](https://en.wikipedia.org/wiki/%C3%89cole_des_technologies_num%C3%A9riques_appliqu%C3%A9es) says : " [ETNA](http://www.etna.io/alternance/) is a French private university in computer science"

Students works remotely on school's projects, and since the degree is certified by the state, the school has to provide evidences that their students works a certain amount of time per month.
To do so, the school has a bot that checks the student's `svn` activities (*commit*, *up*, amount of code ...)

For the moment, a `svn up` every 30min is enough to fool the bot, but it wouldn't be difficult to make a better bot and it will probably come soon.
So we need to make our own bot better than the school's one.

## TODO

- [ ] Connect to the *prepintra* (school's intranet for students)
- [ ] Fetch all projects
- [ ] Detect projects language and frameworks / librairies
- [ ] Get working hours and make a conf file from it
- [ ] Commit every 30min +/- 5min random
- [ ] Get code from github with the correct technologies
- [ ] Generate credible commit messages and 'functionnality names'
