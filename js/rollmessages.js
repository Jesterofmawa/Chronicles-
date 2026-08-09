const rollMessages = [

`
<p>🎒 <strong>Pip rummages through his satchel.</strong></p>

<p><em>"Hang on... I've got just the thing."</em></p>

<p>He triumphantly produces a well-worn die.</p>
`,

`
<p>🐿️ <strong>Pip grins mischievously.</strong></p>

<p><em>"I've been waiting to roll this all day."</em></p>

<p>He spins a die across the table.</p>
`,

`
<p>📚 <strong>Pip adjusts his tiny satchel.</strong></p>

<p><em>"Every chronicler should carry a lucky die."</em></p>

<p>He dusts one off before handing it over.</p>
`,

`
<p>🎲 <strong>Pip shakes a small leather pouch.</strong></p>

<p><em>"Listen to that! Sounds promising."</em></p>

<p>A die tumbles into his paw.</p>
`,

`
<p>🎒 <strong>Pip disappears almost entirely inside his satchel.</strong></p>

<p><em>"...It's definitely in here somewhere."</em></p>

<p>A moment later he pops back out, proudly holding a die.</p>
`,

`
<p>🧭 <strong>Pip searches every pocket.</strong></p>

<p><em>"I know I packed one..."</em></p>

<p><em>"...Ah! Found it!"</em></p>
`,

`
<p>🪙 <strong>Pip pats his satchel proudly.</strong></p>

<p><em>"Every chronicler carries a few lucky dice."</em></p>

<p>He carefully selects one before giving it a flick.</p>
`,

`
<p>✨ <strong>Pip smiles warmly.</strong></p>

<p><em>"Let's see what fate has written."</em></p>

<p>He rolls the die with surprising confidence.</p>
`

];

function randomRollMessage() {

    return rollMessages[
        Math.floor(Math.random() * rollMessages.length)
    ];

}
