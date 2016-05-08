$(document).ready(function(){
    // List of Blog information
    var bloglist=[
        {
            "title":"Product Grid",
            "img":"images/productgrid.png",
            "link":"product",
            "text":"<h3>What I Hope To Learn</h3><p>With this componenet I hope to learn a little more about grids. I know there are various ways to create different styles of grids, but I feel like they are an important tool to have some knowledge of. Grids seem to be used more and more to display information in unique and easy interfaces. I hope to focus and learn more about, specificaly, CSS flex grids.</p><h3>How This Relates To What I Have or Will Learn in WDD</h3><p>Grids are becoming an important tool to display products, articles, and information. They are used to show importance, or lack of importance, based on layouts and size. Grids, like  grid of equals, can show that all the information is equally as important or, through size, draw attention to one item. It is important for UI development because it helps give the user a direction and some knowledge at first glance of where to go.</p>"
        },
        {
            "title":"CTA With Multiple Backgrounds",
            "img":"images/bg.png",
            "link":"cta",
            "text":"<h3>What I Hope To Learn</h3><p>With this component I hope to learn more about background properties. This CTA uses an image and two different color overlays, which looks really unique and well done. I want to learn more about ways to create overlaying patterns, colors, and shapes with CSS and I think this is a good place to start.</p><h3>How This Relates To What I Have or Will Learn in WDD</h3><p>We have learned the basics of creating a CTA and CSS background properties. I think exploring options like this is the next step in creating truly unique work that stands out from other sites. Adding something like this seems like a natural progression from a CTA with just an image or color background to multiple backgrounds mixed together for a unique landing.</p>"
        },
        {
            "title":"Testimonial Layout",
            "img":"images/testimony.png",
            "link":"test",
            "text":"<div class='featuredpost'>Featured</div><h3>What I Hope To Learn</h3><p></p><h3>How This Relates To What I Have or Will Learn in WDD</h3><p></p>"
        },
        {
            "title":"Featured Article Layout",
            "img":"images/newarticle.png",
            "link":"featured",
            "text":"<h3>What I Hope To Learn</h3><p>What I liked about this layout was the combination of other componenets I picked out. This uses grids and transparent, it seems like, buttons or links. I hope from this I can learn more about grids and inputs and different ways to use them. I like the featured article layout of this componenet and how it is larger than the other articles, which is something I would like to learn how to do.</p><h3>How This Relates To What I Have or Will Learn in WDD</h3><p>Again, I think this really ties into UI/UX design. Grids are an easy way to display information in a way that inheritly implies importance and are being used more and more. I think this will be an important area to not only understand but understand how to make the grids stand out and take on a unique look and style. Combining grids with other techniques from the components I choose will help to create a more enjoyable user experience and further my skillset.</p>"
        },
        {
            "title":"Newsletter Form",
            "img":"images/signup.png",
            "link":"news",
            "text":"<h3>What I Hope To Learn</h3><p>I thought this newsletter signup was interesting. It was placed in the footer and uses transparent form elements. I didn't realize you could set form elements to be transparent so this caught my eye. I hope from this I will learn a little bit more about styling form inputs and creative ways to use them. I think with the right background transparent inputs can be done really well and it is something I haven't seen too much.</p><h3>How This Relates To What I Have or Will Learn in WDD</h3><p>This relates to user interfaces and different ways to make the interface unique. We have spent time working on inputs and form styling, focusing on making them unique or modern. An example of this is using CSS frameworks and trying to style those inputs in a way that they do not look like every other Bootstrap, Foundation, or Skeleton page. This style of input would be an easy way to distinctly change your form inputs.</p>"
        }
    ];
    //Print links to blogs in sidebar
    $(bloglist).each(function(i){
        var blog = bloglist[i];
        $('.sidebar').append('<p><a href="#'+blog.link+'">'+blog.title+'</a></p>');
        $('#blogdisplay').append('<article id="'+blog.link+'"><h2>'+blog.title+'</h2><img src="'+blog.img+'" class="blog-img" alt="'+blog.title+'"/>'+blog.text+'</article>');
    });
    var height = $('#about').height();
    height += parseInt(height) * .25;
    $('.sidebar').css('height', height);
});
