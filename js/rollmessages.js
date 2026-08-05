const rollMessages = [

`🎲 Pip rummages through his satchel.

"Hang on... I've got just the thing."

He triumphantly produces a well-worn die.

He tosses it into the air...`,

`🐿️ Pip disappears almost entirely inside his satchel.

"...It's definitely in here somewhere."

A moment later he pops back out holding a die.

"Found it!"`,

`🎒 Pip pats his satchel proudly.

"Every chronicler carries a few lucky dice."

He selects one carefully before giving it a flick.`,

`📚 Pip shifts a pile of journals aside.

Maps.

Bookmarks.

Loose parchment.

A biscuit.

"...Ah!"

At last he uncovers a die.`,

`🐿️ Pip grins mischievously.

"I've been waiting to roll this all day."

He spins a die across the table.`,

`🎲 Pip reaches into his satchel without looking.

"I wonder which one I'll find today..."

He smiles as a die lands neatly in his paw.`

];

function randomRollMessage() {

    return rollMessages[
        Math.floor(Math.random() * rollMessages.length)
    ];

}