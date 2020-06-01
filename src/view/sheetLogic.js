
sheetProj.view.sheetLogic = {
  setupUserInterface: function () {
    projectBar.setBarThumbnails();
    searchBar.setFilterButtons();
    }
};

let projectBar={
  //Set the grid of preview thumbnails (likely have a pointer to part of the array then continue to the right until 3 are created.).
  setBarThumbnails:function(){
    let pointer=localStorage.getItem("projBarCounter");
    let projArray=searchBar.getFilteredProjects();
    if (!projArray.length){
      $("#previewBar").html("");
      return;
    }
    let projects=``;
    //potentially an onclick will be wired here to allow for loading selected projects as unique ids will be difficult given the current design
    for (let i=0; i<3; i++){
      let currProj=projArray[pointer];
      projects+=`<div class="col projectSlot">
        <div class="projectThumbnail" style="background-image:url(${currProj.thumbnail})" onclick="projectView.displayProject(${pointer})">
          <p class="thumbnailTitle">
            ${currProj.name}
          </p>
        </div>
      </div>`;

      pointer++;
      if (pointer>=projArray.length){
        pointer=0;
      }
    }

    let previewBar=`
    <button class="col-1 projNavLeftButton" onclick="projectBar.movePointer(-1)">

    </button>
    ${projects}
    <button class="col-1 projNavRightButton" onclick="projectBar.movePointer(1)">
    </button>`;

    $("#previewBar").html(previewBar);

  },
  movePointer:function(change){
    // shift shown thumbnails, argument changes whether to shift to the right or left.
    let pointer=parseInt(localStorage.getItem("projBarCounter"));
    let projectLength=searchBar.getFilteredProjects().length;
    pointer+=change;

    if (pointer>=projectLength){
      pointer=0;
    }
    else if(pointer<0){
      pointer=projectLength-1;
    }
    localStorage.setItem("projBarCounter", pointer);
    projectBar.setBarThumbnails();
  },


}

let projectView={
  displayProject:function(index){
    //when thumbnail clicked, display the project screen

    let projArray=searchBar.getFilteredProjects();
    let project=projArray[index];
    let projectSpecs=``;


    let carouselIndicators='';
    let carouselItems="";
    let videoSection="";
    let techList="";


    for (let i=0; i<project.sampleImages.length; i++){
      let active="";
      let sampleStats=project.sampleImages[i];
      if (i==0){
        active="active";
      }
      carouselItems+=`<div class="carousel-item ${active}">
          <img class="carouselImg d-block w-100" src="${sampleStats.url}" alt="First Slide">
          <div class="carousel-caption d-none d-md-block">
          <h5>${sampleStats.captionTitle}</h5>
          <p>${sampleStats.caption}</p>
          </div>
          </div>`;

      carouselIndicators+=`<li data-target="#carouselIndicators" data-slide-to="${i}" class="${active}"></li>`;
    }

    if (project.moreSection.length){
      videoSection+=`<div class="col-2 offset-1">
        <h2>More</h2>
        (Opens an overlay with embedded video)<br>
        <ul>`;

        for (let i=0; i<project.moreSection.length; i++){
          videoSection+=`<li><span class="videoText" onclick="videoOverlay.openOverlay('${project.moreSection[i].url}')">${project.moreSection[i].previewText}<br></span></li>`;
        }

      videoSection+=`</ul></div>`;

    }

    project.technologiesUsed.forEach(function(tech){
      techList+=`<li>${tech}</li>`;
    });



    projectSpecs+=
  `  <div class="row mt-4">
        <div class="col offset-2">
          <h2>${project.name}</h2>
          <hr>
        </div>
      </div>


      <div class="row" style="">
        <div id="carouselIndicators" class="carousel slide ${project.moreSection.length? "col-6 offset-2":"col-10 offset-1"}  mt-2" data-ride="carousel">
          <ol class="carousel-indicators">
            ${carouselIndicators}
          </ol>
          <div class="carousel-inner">
            ${carouselItems}


          </div>
          <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        ${videoSection}

      </div>

      <div class="row">
        <div class="${project.moreSection.length? "col-3 offset-2":"col-6 offset-1"}  offset-2">
          <h2>About Section</h2>
          ${project.aboutSection}
        </div>
        <div class="col-3">
          <h2>Tags</h2>
          <ul>
          ${techList}
          </ul>
        </div>
      </div>
      <hr>
      `;

    $("#projectSpecs").html(projectSpecs);
    $("#projectSpecs").removeClass("collapsed");
    document.getElementById("projectSpecs").scrollTop=0;
    $("#projNav")[0].scrollIntoView({behavior: "smooth"});



  }
}

let searchBar={
  getFilteredProjects:function(){
    let projectFilter=JSON.parse(localStorage.getItem("projectFilter"));
    let projectData=JSON.parse(localStorage.getItem("projectData"));
    let splicedIndexes=[];

    if (projectFilter.length){
      for (let i=0; i<projectData.length; i++){
        if(!checkInclusion(projectData[i].technologiesUsed, projectFilter)){
          splicedIndexes.push(i);
        }
      }
    }
    while(splicedIndexes.length) {
        projectData.splice(splicedIndexes.pop(), 1);
    }

    return projectData;


  },
  //create filtering buttons
  setFilterButtons:function(){
    //called on start
    let projectFilter=JSON.parse(localStorage.getItem("projectFilter"));
    let projectData=JSON.parse(localStorage.getItem("projectData"));
    let filters={};
    let searchBar=`<span class="mt-2 mx-2 searchbarTitle">Filter Projects:</span>`;
    for (let i=0; i<projectData.length; i++){
      let techUsed=projectData[i].technologiesUsed;
      if (projectFilter.length>0 && !checkInclusion(techUsed, projectFilter)){
        continue;
      }
      for (let j=0; j<techUsed.length; j++){
        let newFilter=techUsed[j];
        if (filters.hasOwnProperty(newFilter)){
          filters[newFilter].counter++;

        }
        else{
          filters[newFilter]={
            counter:1,
            label:newFilter
          }
          if (projectFilter.includes(newFilter)){
            filters[newFilter].toggled="checked";
          }
          else{
            filters[newFilter].toggled="";
          }

        }
      }
    }

    filters=Object.values(filters);
    filters.forEach(function(filter){
      searchBar+=`<div class="filterToggle  mx-2 mt-3">
        <input id="toggle${filter.label}" type="checkbox" onchange="searchBar.toggleFilter(event.target.checked, '${filter.label}')" ${filter.toggled}>
        <label class="pl-1" for="toggle${filter.label}">${filter.label}<span class="badge badge-light mx-1">${filter.counter}</span></label>
      </div>`;
    });


    $('#searchBar').html(searchBar);
  },
  //have filter buttons, when at least one is active, change the available list of projects
  toggleFilter:function(checked, filterName){
    let projectFilter=JSON.parse(localStorage.getItem("projectFilter"));
    if (checked){
      projectFilter.push(filterName);
    }
    else{
      projectFilter.splice(projectFilter.indexOf(filterName),1);
    }

    localStorage.setItem("projectFilter", JSON.stringify(projectFilter));
    localStorage.setItem("projBarCounter", 0);
    projectBar.setBarThumbnails();
    searchBar.setFilterButtons();
  }

}

let videoOverlay={
  openOverlay:function(url){
    $("#activeVideo").html(`<iframe class="embed-responsive-item" width="1903" height="838" src="${url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    $("#videoOverlay").css("display", "block");
    $("#overlayAlert").fadeTo(3000, 500).slideUp(1000, function(){
      $("#overlayAlert").slideUp(500);
    });
  },
  closeOverlay:function(){
    $("#videoOverlay").css("display", "none");
    $("#activeVideo").html("");
  },
  setup:function(){
    $("#overlayAlert").hide();

  }
}


function checkInclusion (theList, guest){
  //both assumed to be arrays, returns true if EVERY element in guest is on the list therwise return false
  for (let i=0; i<guest.length; i++){
    if (!theList.includes(guest[i])){
      return false;
    }
  }
  return true;
}













//when behidn the scenes video clicked open up overlay screen with embedded youtube video ready to play

//clicking escape when overlay is on or clicking red X on overlay screen causes overlay to close
