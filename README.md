# angularjs-loading-animation
An AngularJS 1.5+ component that can be used to show a loading animation while a promise is not yet resolved.
It can be used to wrap whatever HTML content with a loading message above animated dots, while a promise is still in progress
**********************************************************************************************************************************************

How to use:
<pre><code>
&lt;loading-animation promise="api.promise" message="Loading"&gt;
  &lt;span&gt;Loaded content&lt;/span&gt;
&lt;/loading-animation&gt;
</code></pre>
