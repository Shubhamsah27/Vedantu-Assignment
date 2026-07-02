# DPDP Parental Consent Prototype

This repository contains a prototype demonstrating the user flow for parental consent under the Digital Personal Data Protection (DPDP) Act, designed for a platform like YouTube.

## 🔗 Live Prototype
[View the Interactive Prototype Here](https://dreamy-selkie-7b1222.netlify.app/)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Shubhamsah27/Vedantu-Assignment)

## 🌊 User Flow Diagram

The following diagram illustrates the flow from a child attempting to use the platform to the parent granting consent:

```mermaid
sequenceDiagram
    actor Child as Child User
    participant System as YouTube Platform
    actor Parent as Parent / Guardian

    Child->>System: Opens YouTube & triggers Age Gate
    System-->>Child: Requests Date of Birth
    Child->>System: Enters DOB (Under 18)
    System-->>Child: DPDP Act Triggered: Requires Parental Consent
    Child->>System: Provides Parent's Email
    System->>Parent: Sends Consent Request Notification/Email
    Parent->>System: Clicks Notification & Opens Consent Dashboard
    System-->>Parent: Displays Data Handling Controls (Essential, Recommendations, Ads)
    Parent->>System: Adjusts Settings & Confirms
    System-->>Parent: Sends OTP for Verification
    Parent->>System: Enters OTP
    System-->>Parent: Consent Recorded on DPDP Ledger
    System-->>Child: Unlocks Account for Safe Browsing
```

## 🛠️ How to run locally
1. Clone this repository.
2. Open `index.html` in your web browser.
