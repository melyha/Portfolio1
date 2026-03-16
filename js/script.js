$(document).ready(function() {
    // Project card hover effects
    $('.project-card').hover(
        function() {
            $(this).find('.project-img').css('transform', 'scale(1.05)');
            $(this).find('.arrow-link').addClass('animate__animated animate__pulse');
        },
        function() {
            $(this).find('.project-img').css('transform', 'scale(1)');
            $(this).find('.arrow-link').removeClass('animate__animated animate__pulse');
        }
    );
    
    // Animate headings with delay
    $('h1.text-primary').addClass('animate__animated animate__fadeInDown');
    $('h2.text-primary, h2.category-title').addClass('animate__animated animate__fadeInUp animate__delay-1s');
    
    // Add animation to all buttons
    $('.btn').addClass('animate__animated animate__fadeIn animate__delay-1s');
    
    // Log to console that jQuery is running
    console.log("jQuery animations applied successfully");
});