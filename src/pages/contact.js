import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "./contact.css"

const ContactPage = () => (
  <Layout>
    <Seo title="Contact Us" />
	<h1 id="contact-us">Contact Us</h1>
	<p>
		Got any ideas, questions, or comments about this website?
		Like to share your favorite resources to stay safe and informed during the pandemic?
		Fill out our form and we'll get back to you.
		If it's a great find we'll add it to our website and credit you if you like.
	</p>
	<p>
		Scroll down or
		<a href="#contact-team">
			click here if you want to meet the superheroes behind this website.
		</a>
	</p>
	<p>
		想分享您所曉得的訊息一同幫助抗疫嗎？
		亦或對本網站有任何想法、問題、意見，歡迎填寫我們的表格，我們將盡快與您回覆。
		有關您提出的所有寶貴建議，我們將會列入參考，感謝您。
		若想進一步認識網頁背後的幕後英雄，可以往下滑或
		<a href="#contact-team">
			點擊這裡。
		</a>
	</p>
	<h2 id="contact-form">
		Contact Form
	</h2>
	<p>
		Only message is required if you prefer to stay anonymous.
		When you want us to get back to you, please remember to leave your name, email, phone number, or chat ID?
	</p>
	<p>
		若希望我們與您回應，歡迎留下您的電子郵件、電話號碼或 Line ID。如果您希望保持匿名，留下您寶貴意見即可完成，謝謝！
	</p>
	<form
		action=""
		method="post"
		name="contact-form"
		netlify >
		<fieldset>
			<div>
				<div className="label-input-container">
					<label for="field-wnd_ShortTextField_796228343">
						Name 姓名
					</label>
					<input id="field-wnd_ShortTextField_796228343" name="wnd_ShortTextField_796228343" value=""
						type="text" maxlength="150" />
				</div>
				<div className="label-input-container">
					<label for="field-wnd_ShortTextField_737875075">
						Email
					</label>
					<input id="field-wnd_ShortTextField_737875075" name="wnd_ShortTextField_737875075" value=""
						type="text" maxlength="150" />
				</div>
				<div className="label-input-container">
					<label for="field-wnd_ShortTextField_177896632">
						Phone 電話
					</label>
					<input id="field-wnd_ShortTextField_177896632" name="wnd_ShortTextField_177896632" value=""
						type="text" maxlength="150" />
				</div>
				<div className="label-input-container">
					<label for="field-wnd_LongTextField_589351738">
						Message 留言
					</label>
					<textarea rows="5" id="field-wnd_LongTextField_589351738" name="wnd_LongTextField_589351738"
						required=""></textarea>
				</div>
			</div>
		</fieldset>
		<button type="submit" name="send" value="wnd_FormBlock_15659336" className="button">
			<span>Submit</span>
		</button>
	</form>
	<h2 id="contact-team">Meet Our Team</h2>
	<p>
		We are a mix of locals and foreigners living in Taichung.
		We don't work in healthcare but we share a deep love for Taiwan.
		Our mission is to keep English speakers in Taichung informed with COVID-19 updates so our expat community
		can help fight the SARS-CoV-2 virus outbreak in Taiwan and we can all keep our families and friends safe and
		healthy.
	</p>
	<p>
		We're all volunteers and we do our best to make new information quickly available to you.
		Please let us know if you see anything out of place?
	</p>
	<h3>Eddy A</h3>
	<p>
		is a young-at-heart Belgian who loves living and working in Taiwan, sharing his passion and 💡 with the
		world, technology, learning, fine dining, and dogs.
		He tries to be the glue that keeps it all together but often he just sits back with a cold 🍺 and feels
		blessed with what all these wonderful people around him have come up with now.
	</p>
	<h3>
		Teresa Chuang
	</h3>
	<p>
		Otherwise known as T.
		She is our relentless driving-force, much like an energizer bunny 🔋, always cheerful and chipper.
		Aside from (or maybe because of) that she's also an awesome connector, teacher, and facilitator who loves
		people, biology, her country Taiwan, and life.
		Oh and let's not forget her cute dog Mumu 😻 who is lucky enough enjoy all that energy and attention with
		Teresa's husband Jimmy.
	</p>
	<h3>
		Mark O
	</h3>
	<p>
		Our tech 💻 whizz is a down-to-earth Canadian who loves creating cool technology really fast.
		Turns out he hasn't been programming for all that long yet.
		Hard to believe when you see the smart and creative results he spews out at an incredible pace.
		Always working on a few projects simultaneously, when he passionately describes his newest software idea, it
		feels like Gates and Jobs had a 👶
	</p>
	<h3>
		Sophia Huang
	</h3>
	<p>
		Sophia was born and raised in the US for about 10 years before coming back to Taiwan.
		Her superpowers 🦸 are fluency in English and Chinese, team motivation, positivity, and keeping her cool
		when everyone else (mostly Eddy) is losing track of ⌚ or goals. She loves oranges and works hard to stay fit
		and healthy and to provide affectionate care for her father and 🐶 .
	</p>
	<h3>
		Coco Hsu
	</h3>
	<p>
		loves researching 🔬 to find out how to make technology better for people and prefers to do so with a can of
		fresh coconut water in hand.
		But that's not where her name comes from, interestingly enough.
		Coco is smart, creative, and outgoing.
		And she loves oranges 🟠 too. What's up with that?
	</p>
	<h3>
		Ben Chuang
	</h3>
	<p>
		is the smart and hardworking brother of Teresa.
		He may appear shy and humble at first but behind the curtain he's our OCR hero and proofreader 📑 who
		changes all the Chinese information we can find to usable formats on a daily basis, ensuring that our
		content is as good as he is.
		We admire his flexibility and we're happy that we can help him to further improve his English.
		Because giving back 💚 is just as much fun as receiving.
	</p>
	<h3>
		Carol Lin
	</h3>
	<p>
		Our experienced UI/UX designer 🎨 from Taiwan loves to make pretty things.
		After work Carol loves to visit concerts, events, and art galleries which shows in her own delightful and
		original creations.
		But what makes Carol a true super🦸 in our eyes is that all those stunning things she creates are always
		focused on what works best for the user (UX) and in line with each project's goals and timeline.
	</p>
	<h3>
		Antonio A
	</h3>
	<p>
		Our newest super⭐ is from Mexico and he lives to develop open source, user-centered, pleasant-looking tools
		and technology.
		In short, he's our kind of guy.
		And, much like señor Banderas, this Antonio loves movies, animation, music, and voice-overs, although I'm
		not sure about 🐱 and 👢 though.
		But one thing's for sure, no living soul can resist those big, brown eyes when they spark with yet another
		amazing insight or idea. Olé!
	</p>
	</Layout>

)

export default ContactPage
