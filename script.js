import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

window.addEventListener('scroll', function() {
    const footer = document.querySelector('.footer');

    // Check if the user has scrolled to the very bottom of the page
    if (hasVerticalScrollbar){ 
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            footer.classList.add('show'); // Add 'show' class to reveal the footer
        } else {
            footer.classList.remove('show'); // Remove 'show' class to hide it
        }
    } else {
         footer.classList.add('show');
    }
});
public class ScrollCheck {
    public static void main(String[] args) {
        // Assume 'driver' is your initialized WebDriver instance
        WebDriver driver = null; // Initialize your WebDriver here

        JavascriptExecutor js = (JavascriptExecutor) driver;
        boolean hasVerticalScrollbar = (boolean) js.executeScript("return document.documentElement.scrollHeight > document.documentElement.clientHeight;");

        if (hasVerticalScrollbar) {
            System.out.println("The page has a vertical scrollbar.");
        } else {
            footer.classList.add('show');
        }
        // ... (close WebDriver)
    }
}