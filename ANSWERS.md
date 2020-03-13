- [ ] Why would you use class component over function components (removing hooks from the question)?

If I need lifecycle hooks then I should use class components over function components, but I think there are hooks for these now. Really it is better to use function components because they are easier to understand and you end up writing less code, but a lot of legacy code and resources are written in class components so it is good to keep writing class components so you remember the syntax and functionality thus allowing you to understand legacy code and resources written with class syntax better.

- [ ] Name three lifecycle methods and their purposes.
We use CDM to fetch initial data from API and set up event listeners and timers. CDU is used when certain state or props change or to run some code. CWU is closely tied to CDM and cleans up any event listeners or timers that were started in CDM.

- [ ] What is the purpose of a custom hook?
A custom hook makes code reusable like components and keeps less code in individual components. Since we can use hooks in several places in our code it can make debugging easier since our hook logic is in one file. 

- [ ] Why is it important to test our apps?
It’s important to test our apps to make sure it’s doing what we want it to do. It gives us confirmation that our app is running properly. It is also good for big projects because there might be several people working on a code base, and, by having tests, we can more easily figure out what is breaking the code.