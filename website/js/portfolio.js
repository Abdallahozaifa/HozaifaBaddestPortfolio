/* global $*/
$(document).ready(function() {
    console.log("portfolio.js!");

    var createSection = function() {

    };

    var createLayout1 = function(hrefArr, bgImgArr, projTitleArr, projCaptArr) {
        this.sectDiv = document.createElement('div');
        this.sectDiv.className = "section__row row row-thin";
        this.$sectDiv = $(this.sectDiv);

        this.colComp = document.createElement('div');
        this.colComp.className = "col-xs-12 col-sm-8";
        this.$colComp = $(this.colComp);

        this.$sectDiv.append(this.colComp);

        this.link = document.createElement('a');
        this.link.className = "project project--these-beats-are-dope project-image";
        this.$link = $(this.link);
        this.$link.attr('href', hrefArr[0]);
        this.$link.css('background-image', "url('" + bgImgArr[0] + "')");

        this.$colComp.append(this.link);

        this.bgProject = document.createElement('span');
        this.bgProject.className = "project__background";

        this.$link.append(this.bgProject);

        this.projDescr = document.createElement('div');
        this.projDescr.className = "project__description";
        this.$projDescr = $(this.projDescr);

        this.$link.append(this.projDescr);

        this.projTitle = document.createElement('h4');
        this.projTitle.className = "project__title";
        this.$projTitle = $(this.projTitle);
        this.$projTitle.text(projTitleArr[0]);

        this.$projDescr.append(this.projTitle);

        this.capt = document.createElement('small');
        this.capt.className = "project__caption";
        this.$capt = $(this.capt);
        this.$capt.text(projCaptArr[0]);

        this.$projDescr.append(this.capt);

        this.projLink = document.createElement('small');
        this.projLink.className = "project__link";
        this.$projLink = $(this.capt);
        this.$projLink.text("Try it out");

        this.$projDescr.append(this.projLink);
        $("#work > div > div > div").append(this.sectDiv);
        console.log(this.sectDiv);
    };

    // createLayout1(
    //     ["https://hozaifaabdalla.com", "https://blog.hozaifaabdalla.com"],
    //     ['/img/project-images/portfolio.png', '/img/project-images/blog.png'], 
    //     ['Portfolio', 'Blog'], 
    //     ['Hand Crafted Portfolio', "Blog built from the groun up!"]
    // );
});
