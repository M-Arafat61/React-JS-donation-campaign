# Donation Campaign

- ## Project features

### 1. Selecting a card from _`Home`_ page and search for card based on _Category_.

### 2. While selecting a card navigate to a _`Dynamic Route`_ and showing specific Card Details

### 3. From the _`Dynamic Route`_ to _`Donation`_ page.

### 4. Showing _`Pie chart`_ of selected Donation vs Total Donation.

#

- ## Implementation of project features

##### 1. _`Home`_ page contains _12 Cards_ from _`campaign.json`_ data that fetched using _`loader`_ from Root component of the project.

```
{
    path: "/",
    element: <Home></Home>,
    loader: () => fetch("/campaign.json"),
}
```

##### Each card Contains an image, category name and title. Cards with same category has individual _BackgroundColor_ and _TextColor_. By _`searching with category`_ name same categories cards can be filtered.

#

##### 2. Clicking on a card takes to _`Donation Details page`_ where details of donation with _Donate button and price_ has been applied.

```
 {
    path: "/donation-details/:id",
    element: <DonationDetails></DonationDetails>,
    loader: () => fetch("/campaign.json"),
}
```

##### _Donation Details page_ is _`Dynamic Route`_ that also contains _`campaign.json`_ data. By Clicking Donate button _`localStorage saves`_ donated cards information.

#

##### 3. From _Dynamic Donation Details page_ clicking Donate goes to _`Donation page`_ where each and every donation card has shown from getting _`localStorage data`_.

#

##### 4. _`Statistics page`_ shows _`PieChart`_ of _Total Donation vs Individual Donation as percentage_.
