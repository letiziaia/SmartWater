import React from 'react';
import { Text } from 'react-native';

const slogans = ['A drop of water is worth more than a sack of gold to a thirsty man.',
    'A slogan on Water is a slogan on life.',
    'A small trick: Displace water in your flush tank with a brick!',
    'A thirsty man will pay in gold for water.',
    'Ask the worth of water to a thirsty man.',
    'Avoid baths and take shower; save water for the flower.',
    'Be a smart user. Use wisely! Conserve Water!',
    'Be green like a pro, by conserving H20.',
    'Behave responsibly or die thirsty! It’s your choice!',
    'By polluting our own rivers and lakes; we put future generations at stake.',
    'By wasting water you are digging your own grave!',
    'Check the faucets before going to sleep; make your future safe and cheap.',
    'Collect rainwater to save ground water.',
    'Conserve water and protect its sources.',
    'Conserve water to ensure its availability for future.',
    'Conserve water, conserve life!',
    'Conserve water,our life’s on the brink!',
    'Don´t let your children blame you one day for leaving them without clean water.',
    'Don’t be a fool, cover your pool.',
    'Don’t drop out to save the drop.',
    'Don’t flush our planet’s most valuable resource.',
    'Don’t let life slip down the drain.',
    'Don’t let the water run in the sink, our life’s on the brink!',
    'Don’t let water scarcity be a reality!',
    'Don’t let your children blame you one day for leaving them without water.',
    'Don’t spend water at a rate more than it could be replenished.',
    'Don’t waste water – conserve it for future generations.',
    'Dont waste it, just taste it!',
    'Either rich or poor; everyone needs water.',
    'Every drop counts!',
    'Every drop you save now will save the children of tomorrow.',
    'Fight to conserve water to avoid fighting for it.',
    'How many drops make up an ocean? Conserve water; every drop counts.',
    'Humans or wildlife; all need water to survive.',
    'If fresh water ends; life ends too!',
    'If Water is Life, then why we are wasting it?',
    'If we care of it, It will care for us.',
    'If we don’t learn to conserve, we’ll all be fish out of water.',
    'If you think you deserve it then preserve it! Please!',
    'It takes a lot of blue to stay green.',
    'It’s better to conserve it today than to fight for it tomorrow.',
    'It’s only good until the last drop, than What?',
    'Lakes formed in centuries could be dried up only in months – choice is yours!',
    'Life depends on water, the reservoir depends on you.',
    'Life starts with water.',
    'Make water conservation a priority for the nation.',
    'More water, more happiness.',
    'Natural water is produced slower than you think – spend wisely!',
    'Neither overuse it nor misuse it; carefully use it.',
    'No matter your occupation. Water conservation is your obligation.',
    'No water to drink will push the civilization to brink. Rethink!',
    'Nothing will be left here without water.',
    'Numbers of thirsty people are growing; signs of the day zero are showing.',
    'Only if we conserve water today; we will be able to use it tomorrow.',
    'Our life depends on it and will soon end with it. If we don’t save water!',
    'Please stop that drip.',
    'Protect water resources around you and ensure they remain clean.',
    'Pure water = better life. Don’t ruin it.',
    'Put a stop to the drop.',
    'Rainwater tank, won’t break the bank.',
    'Remember that you have to share water with all living beings.',
    'Save a drop, save your future.',
    'Save electricity to save water!',
    'Save every drop of it, as you will need it later.',
    'Save the Sea to See the Future.',
    'Save water – every drop counts.',
    'Save water and save the life on the earth.',
    'Save water and tell others to do so.',
    'Save water for your daughter!',
    'Save water it will save you later!',
    'Save water secure the future!',
    'Save water today for tomorrow.',
    'Save water! Save Life!',
    'Save water, and it will save you.',
    'Save water, it will save you later!',
    'Save water, secure the future.',
    'Save water, shower with a friend.',
    'Save water… it doesn’t grow on trees.',
    'Save Water…..It’s not just a drop in the bucket.',
    'Save water…it doesn’t grow on trees.',
    'Saving water can save the world.',
    'Saving water means saving the future of our planet.',
    'Saving water one drop at a time.',
    'Step up to avoid point of no return! Save Water!',
    'Stop making a splash. Conserve water.',
    'Stop the drip to save the drop.',
    'Tap the Tap.',
    'The best gift you can give to coming generation is water.',
    'The choice is yours- Save it or Waste it.',
    'The water we have today is all that we could ever have!',
    'There are number of ways to save water. And, they all start with you.',
    'There is a thin line between using water and wasting water.',
    'Think outside the sink!',
    'Thousands have lived without love, not one without water.',
    'To have fresh water in sufficient; make your toilet, water efficient.',
    'Todays rain water is tomorrows life saver!',
    'Turning off the water while brushing your teeth, saves more water than you think.',
    'Use water as per need, but not for your greed.',
    'Use water but never waste water!',
    'Use water optimally as you use salt. Nor too much neither too low!',
    'Want mental hydration? Think water conservation!',
    'Waste water today, live in desert tomorrow!',
    'Water covers two-thirds of the surface of the Earth, but Fresh water is 0.002% on Earth.',
    'Water for the future generations….priceless.',
    'Water is a gift from the creator, Protect it! Respect it!',
    'Water is Awesome. Please save the water.',
    'Water is life! save water,save life!',
    'Water is the basic of everything that lives, tread it like that.',
    'Water is the soul of earth, don’t separate both.',
    'Water is too precious, we can’t get it more!',
    'Water is vital for life; scarcity will lead to bitter strife.',
    'Water is where the life comes from.',
    'Water should be seen and heard not smelled.',
    'Water Smarter!',
    'Water taught lessons that the rest of the world could not.',
    'Water, water everywhere but not a drop to drink',
    'We all have to save water.',
    'We don’t have enough and will be left with none – if we don’t conserve.',
    'We need your helping hand, to save water, sky and land.',
    'We never know the worth of water till the well is dry. Save Water!!',
    'When you brush and shave. Save!',
    'When you conserve water, you conserve life!',
    'Without water, survival is impossible.',
    'You have to show that you deserve it – conserve it!',
    'You never know the worth of water until the well runs dry.'];

const WaterSlogan = () => {
    return (<><Text style={{ color: "green" }}> {slogans[Math.floor(Math.random() * slogans.length)]} </Text></>)
}

export default WaterSlogan;