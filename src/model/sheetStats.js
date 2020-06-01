





let projectData=[
  {name:"Portfolio",
  thumbnail:"https://res.cloudinary.com/metaverse/image/upload/v1553963586/Portfolio%20Screenshots/mainScreen.png",
  sampleImages:[{url:"https://res.cloudinary.com/metaverse/image/upload/v1553963577/Portfolio%20Screenshots/previewBar.png", captionTitle:"Preview Bar", caption:"The navigation bar and filter-by-tag buttons create themselves on load from a JSON object of my current projects."}, {url:"https://res.cloudinary.com/metaverse/image/upload/v1553963590/Portfolio%20Screenshots/projView.png", captionTitle:"Project View", caption:"Clicking any of the thumbnails opens up the project view as...well...I'm sure you've been able to tell by now.  The slideshow of images is made using Bootstrap carousel with a few small tweaks to the caption class for readability."}, {url:"https://res.cloudinary.com/metaverse/image/upload/v1553963604/Portfolio%20Screenshots/embedVideo.png", captionTitle:"Video Embed", caption:"Some projects may have a bonus section on the right.  From here a user can open up an overlay with an embedded video going more in depth into some of my projects and my thoughts on them.  The sample image here isn't one of those project videos of course, instead it's the music I happened to have on while testing."}],
  aboutSection:"It's...uh...well this.  This is my Portfolio where I intend to enshrine my projects in a grand testament to my own vanity.  <br><br>  In seriousness it's partially a way to advertise myself, partially a way to inspire me to complete and polish more projects, and definitely an oppurtunity to practice making my final projects more aesthetically pleasing.",
  technologiesUsed:["CSS", "Javascript", "SASS", "HTML"],
  moreSection:[]
  },
  {name:"Discord_Bot",
  thumbnail:"https://res.cloudinary.com/metaverse/image/upload/v1553962079/Portfolio%20Screenshots/ciBardic.png",
  sampleImages:[{url:"https://res.cloudinary.com/metaverse/image/upload/v1553962079/Portfolio%20Screenshots/ciBardic.png", captionTitle:"Music", caption:"Ci's most oft-used feature is to serve as a music-bot.  Using the youtube data API she can fetch a user's youtube playlist or she can simply be given a youtube url.  Then using YTDL she connects to the voicechannel of whoever called her and begins streaming music."},{url:"https://res.cloudinary.com/metaverse/image/upload/v1553962071/Portfolio%20Screenshots/diceRolling.png", captionTitle:"Dice Rolling", caption:"One of her most basic functions is to roll dice for the user as well as save macros for future use."}, {url:"https://res.cloudinary.com/metaverse/image/upload/v1553962073/Portfolio%20Screenshots/avatarClaiming.png", captionTitle:"User profiles", caption:"Ci can associate premade character profiles with specific discord usernames."}, {url:"https://res.cloudinary.com/metaverse/image/upload/v1553962071/Portfolio%20Screenshots/ciQuesting.png", captionTitle:"Questing", caption:"Using these profiles Ci can run users through text-based quests defined by a JSON object."}, {url:"https://res.cloudinary.com/metaverse/image/upload/v1553962073/Portfolio%20Screenshots/avatarClaiming.png", captionTitle:"User profiles", caption:"Ci can associate premade character profiles with specific discord usernames."}, {url:"https://res.cloudinary.com/metaverse/image/upload/v1553962061/Portfolio%20Screenshots/ciAndMore.png", captionTitle:"And more...", caption:"She has a wide array of other features but as she was tailor-made for my own personal table-top group rather than built with public use in mind a lot of them are system/campaign specific and aren't any more technically interesting than what we've already seen."}],
  aboutSection:"Ci is a discord bot intended to help in running table top RPGs.  She can do a lot of neat things, though working with the discord and youtube API to play session music was definitely the challenge I learned the most from.",
  technologiesUsed:["API", "Javascript", "Node.js"],
  moreSection:[]
  },

  {name:"Rpg_Sheets",
  thumbnail:"https://res.cloudinary.com/metaverse/image/upload/v1553887290/Portfolio%20Screenshots/sheetSnap.png",
  sampleImages:[{url:"https://res.cloudinary.com/metaverse/image/upload/v1553887290/Portfolio%20Screenshots/sheetSnap.png", captionTitle:"Default Sheet", caption:"Sheets are fully customizable but has a default bare-bones style that can then get added to or stripped down."}, {url:"https://res.cloudinary.com/metaverse/image/upload/v1553887290/Portfolio%20Screenshots/toggleBar.png", captionTitle:"Toggle Bar", caption:"A bar can be brought up on the bottom of the page, similar to skillbars in MMOs.  From here the user can define the effects of items, spells, etc. they can toggle on and off from affecting their character sheet."}, {url:"https://res.cloudinary.com/metaverse/image/upload/v1553887282/Portfolio%20Screenshots/sheetDraw.png", captionTitle:"Draw System", caption:"If one stat depends on another stat (for example mellee attacks scaling off of strength scores) the user can define these relationships so that domino effects of temporary changes to some stats are handled without a sweat."}],
  aboutSection:`<a href="https://prinnybaal.github.io/ModularSheet/">Visit the Site</a><br><a href="https://github.com/PrinnyBaal/Portfolio">View code on Github</a><hr>An online character sheet maker for table-top rpgs that can be set to calculate math for the user automatically.  This includes the ability to toggle on/off the effects of user-defined spells or pieces of equipment.<br><br>The intent is to make it customizable enough that users can make unique sheets that better suit particular characters or particular games though it does have a number of features specifically for helping players in Pathfinder games.  Funnily enough this started as a project at my old job where case-workers were looking for a customizable way of keeping notes on clients together.  It's obviously morphed quite a bit from that original project but quite a few code blocks were cannibalized to get this off to a running start.`,
  technologiesUsed:["HTML", "Javascript", "CSS"],
  moreSection:[{url:"https://www.youtube.com/embed/XyA18LCalpo", previewText:"Video Tour"}]
  },
  {
    name:"Renpy_Minigames",
    thumbnail:"https://res.cloudinary.com/metaverse/image/upload/v1553815304/Portfolio%20Screenshots/titleScreen.png",
    sampleImages:[{url:"https://res.cloudinary.com/metaverse/image/upload/v1553815423/Portfolio%20Screenshots/squireMini.png", captionTitle:"Duel Minigame", caption:"Targets slowly grow until they 'pop' and deal damage, clicking them at the right time prevents this.  Dialogue changes depending on play."}, {url:"https://res.cloudinary.com/metaverse/image/upload/v1553815369/Portfolio%20Screenshots/cornMini.png", captionTitle:"Corn Fight", caption:"Combat mini-game against multiple corn golems....it, uhm, makes sense in context."}],
    aboutSection:"The result of some experimenting with Ren'py and wanting to see how feasible adding a more actively 'gamey' experience would be given a little extra python scripting.  Surrounding the two mini-games I completed are short little stories set in the 'Star Vs. The Forces of Evil' universe.  While one of the least complete things in my portfolio I still feel a lot of nostalgic pride for it and the two combat mini-games mixed in.<br><br>  I think it's because I have a lot of fond memories of Ren'py in general.  I started my programming journey by learning python with a goal to help with psych experiments in college and then later to help with a little office work.  But the first time I felt giddily happy learning and experimenting was learning to make a birthday gift with Ren'py.<br><br><a href=' https://drive.google.com/open?id=1FTh22-GiouojxBtoqm7Bev0KwBA9HQoh'>Game Files on G-Drive</a>",
    technologiesUsed:["GameDev", "Python", "Renpy"],
    moreSection:[{url:"https://www.youtube.com/embed/LhAfCkhsgVI", previewText:"Video Tour (Part 1)"},{url:"https://www.youtube.com/embed/oioUiWbRdUA", previewText:"Video Tour (Part 2)"}]
  },
  {
    name:"Card_Cobbler",
    thumbnail:"https://res.cloudinary.com/metaverse/image/upload/v1561562526/Portfolio%20Screenshots/higgsyCobbler.png",
    sampleImages:[{url:"https://res.cloudinary.com/metaverse/image/upload/v1561562788/Portfolio%20Screenshots/cobblerMain.png", captionTitle:"General Purpose", caption:"This web app lets users build cards from movable image and text components.  A happy middle-ground between gimp/PS and your average card-game generator."}, {url:"https://res.cloudinary.com/metaverse/image/upload/v1561562794/Portfolio%20Screenshots/cobblerCatalogue.png", captionTitle:"Catalogues", caption:"Images can be stored as fully customizable catalogues for easy storing.  They can also be sorted/filtered by tags for easy retrieval."}, {url:"https://res.cloudinary.com/metaverse/image/upload/v1561562785/Portfolio%20Screenshots/cobblerTemplates.png", captionTitle:"Templates", caption:"Templates allow users to store fully made cards or to store, well, templates with the text, card frame, and images positioned just how they want it and ready for content edits."}],
    aboutSection:`<a href="https://prinnybaal.github.io/Higgsy-sCardCobbler/">Visit the Site</a><br><a href="https://github.com/PrinnyBaal/Higgsy-sCardCobbler/">View code on Github</a><hr>I've enjoyed making web tools and toys for people to create with and I think that learning more about UX is a large part of that.  Pondering how to best make them easy to pick-up while still feeling good for experienced users feels like tangling with a living puzzle while still being a great creative outlet.<br><br>  This was also my first project to receive a wide amount of support and feedback in the forums I shared it in.  Which, while my friends have always been supportive, gave me a great burst of confidence as I felt I really could make things people wanted.`,
    technologiesUsed:["HTML", "Javascript", "CSS", "jquery"],
    moreSection:[]
  },
  {name:"Pathfinder_Crafting",
  thumbnail:"./images/uCraft_Thumbnail.png",
  sampleImages:[{url:"./images/uCraft_Thumbnail.png", captionTitle:"", caption:"Pages upon pages of complicated crafting rules are made easy to understand thanks to affordances in the design."}],
  aboutSection:`<a href="https://prinnybaal.github.io/Higgsy-s-U-Craft/">Visit the Site</a><br><a href="https://prinnybaal.github.io/ModularSheet/">View code on Github</a><hr>The least generic of the tabletop tools I've made, this project dives deep into the Pathfinder rules system.  This project went through a number of iterations, mostly geared toward power users, before I came to really take to heart how important affordances in design are.<br><br>In the end I feel the site struck a nice balance between being accessible to novices and useful to more advanced users, all while maintaining a reasonable aesthetic.`,
  technologiesUsed:["HTML", "Javascript", "CSS"],
  moreSection:[]
  },
  {
    name:"Renpy_Minigames",
    thumbnail:"https://res.cloudinary.com/metaverse/image/upload/v1553815304/Portfolio%20Screenshots/titleScreen.png",
    sampleImages:[{url:"https://res.cloudinary.com/metaverse/image/upload/v1553815423/Portfolio%20Screenshots/squireMini.png", captionTitle:"Duel Minigame", caption:"Targets slowly grow until they 'pop' and deal damage, clicking them at the right time prevents this.  Dialogue changes depending on play."}, {url:"https://res.cloudinary.com/metaverse/image/upload/v1553815369/Portfolio%20Screenshots/cornMini.png", captionTitle:"Corn Fight", caption:"Combat mini-game against multiple corn golems....it, uhm, makes sense in context."}],
    aboutSection:"The result of some experimenting with Ren'py and wanting to see how feasible adding a more actively 'gamey' experience would be given a little extra python scripting.  Surrounding the two mini-games I completed are short little stories set in the 'Star Vs. The Forces of Evil' universe.  While one of the least complete things in my portfolio I still feel a lot of nostalgic pride for it and the two combat mini-games mixed in.<br><br>  I think it's because I have a lot of fond memories of Ren'py in general.  I started my programming journey by learning python with a goal to help with psych experiments in college and then later to help with a little office work.  But the first time I felt giddily happy learning and experimenting was learning to make a birthday gift with Ren'py.<br><br><a href=' https://drive.google.com/open?id=1FTh22-GiouojxBtoqm7Bev0KwBA9HQoh'>Game Files on G-Drive</a>",
    technologiesUsed:["GameDev", "Python", "Renpy"],
    moreSection:[{url:"https://www.youtube.com/embed/LhAfCkhsgVI", previewText:"Video Tour (Part 1)"},{url:"https://www.youtube.com/embed/oioUiWbRdUA", previewText:"Video Tour (Part 2)"}]
  },
  {
    name:"HongKong_Replay",
    thumbnail:"melonSnip.PNG",
    sampleImages:[{url:"https://melonyeah.com/images/tutorial2.gif", captionTitle:"", caption:"Search, share & save through hours of live video"}],
    aboutSection:`<a href="https://melonyeah.com/">Live Site</a><hr>One of the more interesting projects I've been commisioned to work on, I was lucky to work with very active clients who I workshopped a number of designs with before we arrived at a site we were all proud of.  The site uses SOLR to search through a large collection of live video feeds and letting the user search via real world times, video publishers, or real-world location.<br><br> The final effect is a powerful cross-sectional view of what any given moment of time was like 'on the ground' of various HK protests.  The actual database was collected and maintained by my clients while my work involved the presentation, querying the database, and the occasional bit of under-the-hood number crunching.  I no longer maintain the live site though I have once or twice been called upon to help with a new problem that has cropped up after our commision period ended, that is simply to say that there are some minor content and aesthetic changes I cannot take credit for but the behidn the scenes code and layout of the site remains representative of the work I am capable of.`,
    technologiesUsed:["HTML", "Javascript", "CSS", "Commission", "SOLR"],
    moreSection:[]
  },
  {
    name:"SkyRunner",
    thumbnail:"./images/skyRunner.PNG",
    sampleImages:[{url:"./images/skyRunner.PNG", captionTitle:"", caption:""}],
    aboutSection:`<a href="https://prinnybaal.github.io/skyRunner/">Game Sample</a><br><a href="https://github.com/PrinnyBaal/skyRunner/">View code on Github</a><hr>A small endless runner game commisioned by Skyscanner, the intention was to create a cute and interactive addition to their training lectures and documentation.`,
    technologiesUsed:["Unity", "Commission", "GameDev", "C#"],
    moreSection:[]
  },


];


// upcoming projects:    {name:"Dye_Of_Delanoche",
//   thumbnail:"",
//   sampleImages:[{url:"urlofPicture", captionTitle:"What the image is of", caption:"additional info"}],
//   aboutSection:"Some info, some <br> here and there, all that good stuff.",
//   technologiesUsed:["GameDev", "Javascript", "HTML", "SASS", "CSS"],
//   moreSection:[{url:"urlofVideo", previewText:"text for list"}]
//   },

//variable for pointer
localStorage.setItem('projBarCounter', 0);

//array of filtered terms, reset each time
localStorage.setItem('projectFilter',JSON.stringify([]));


//array of objects contianing info on all projects

localStorage.setItem('projectData', JSON.stringify(projectData));






function resetStorage(){
  if (window.confirm("Do you really want to delete all your saved info?")) {
  localStorage.clear();
  location.reload();
}
}
