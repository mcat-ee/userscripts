# Summary
Adds a shortcut to Facebook's chronological feed (which is hidden by default, because algorithmic recommendations)

# Functional Mechanism
The userscript adds a URL to the header bar of the page - this is just an unstyled anchor element for now, but will eventually be replaced by a button that doesn't contrast with the existing buttons.

The userscript will inject the new element several seconds after the initial script execution; this is due the elements being removed shortly after being added to the DOM. I suspect this is due do a React render operation on the component re-triggered by some part of the page initialisation.

# Caveats
It does the job, but also it's an unstyled anchor element
