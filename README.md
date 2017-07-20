Dashboard Starter Kit
=====================


# Dashboards by Keen IO Adapted to my website desireyavro

Add charts to each `chart-stage` HTML element:

``` html
<div class="col-sm-6 col-md-3">
  <div class="chart-wrapper">
    <div class="chart-title">
      Chart Title
    </div>
    <div class="chart-stage">
      <div id="grid-1-1">
        <!-- chart goes here! -->
      </div>
    </div>
    <div class="chart-notes">
      Notes about this chart (optional)
    </div>
  </div>
</div>
```

And voilà!

## Usage

1. Download a copy of this repository as a zip file, using [this link](https://github.com/keen/dashboards/archive/gh-pages.zip). You can also type `git clone keen/dashboards` in your terminal.

2. Check out the various [layouts](http://keen.github.io/dashboards/layouts/) and pick the one that best suits your needs. Find the template in the repository you downloaded at `folder/layouts/(name-of-template)`.

3. Start editing! 
  <div class="chart-stage"> <!-- This is where you need to put the id property in! -->
    <img data-src="holder.js/100%x650/white">
  </div>
  ```
  Now we're going to change those lines so that it looks like this:
  ```html
  <div class="chart-stage" id="chart-01"> <!-- This is where you need to put the id property in! -->
    <!-- Get rid of that img tag! -->
  </div>
  ```

You're finished! Congratulations on setting up your first chart! Repeat step three with the rest of the items in the template to complete your dashboard!

To develop, you'll need to first install dependencies using [Bower](http://bower.io/):

```
$ npm install -g bower
$ bower install
```

Note: Updates to the site backed by the **gh-pages** branch go live immediately once pull requests are reviewed and approved.

Note #2: This project is moving fast, so make sure and stay up to date. Here's what we suggest. Fork this repo, clone the fork, and add the original repo as a remote called `upstream`:

```
$ git clone https://github.com/username/dashboards.git
$ cd dashboards
$ git remote add upstream https://github.com/keen/dashboards.git
```

Pull from `upstream` frequently to keep your local copy up to date:

```
$ git pull upstream gh-pages
```

## Support

For technical questions, use the [`keen-io`](https://stackoverflow.com/questions/tagged/keen-io) tag on Stack Overflow.
