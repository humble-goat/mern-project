import React, { useState, Fragment } from "react";
import {Link, withRouter} from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {createProfile} from '../../actions/profile'
const CreateProfile = ({createProfile, history }) => {
  const [formData, setFormData] = useState({
    location: "",
    status: "",
    gender: "",
    sex_preferences: ""
  });
  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  const { location, status, gender, sex_preferences } = formData;
  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  }
    
  return (
    <Fragment>
      <h1 className='large text-primary'>Create Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className='form' onSubmit={ e=> onSubmit(e)}>
        <div className='form-group'>
          <select name='gender' value={gender} onChange={e => onChange(e)}>
            <option value='0'>* Select your Gender</option>
            <option value="Abimegender" alt="a gender that is profound, deep, and infinite; meant to resemble when one mirror is reflecting into another mirror creating an infinite paradox">Abimegender</option>
            <option value="Adamasgender" alt="a gender which refuses to be categorized">Adamasgender</option>
            <option value="Aerogender" alt="a gender that is influenced by your surroundings">Aerogender</option>
            <option value="Aesthetigender" alt="a gender that is derived from an aesthetic; also known as videgender">Aesthetigender</option>
            <option value="Affectugender" alt="a gender that is affected by mood swings">Affectugender</option>
            <option value="Agender" alt="the feeling of no gender/absence of gender or neutral gender">Agender</option>
            <option value="Agenderflux" alt="Being agender and having fluctuating feelings of masculinity of femininity, but NOT male or female">Agenderflux</option>
            <option value="Alexigender" alt="a gender that is fluid between more than one gender but the individual cannot tell what those genders are">Alexigender</option>
            <option value="Aliusgender" alt="a gender which is removed from common gender descriptors and guidelines">Aliusgender</option>
            <option value="Amaregender" alt="a gender that changes depending on who you’re in love with">Amaregender</option>
            <option value="Ambigender" alt="defined as having the feeling of two genders simultaneously without fluctuation; meant to reflect the concept of being ambidextrous, only with gender">Ambigender</option>
            <option value="Ambonec" alt="identifying as both man and woman, yet neither at the same time">Ambonec</option>
            <option value="Amicagender" alt="a gender that changes depending on which friend you’re with">Amicagender</option>
            <option value="Androgyne" alt="sometimes used in the case of “androgynous presentation”; describes the feeling of being a mix of both masculine and feminine (and sometimes neutral) gender qualities">Androgyne</option>
            <option value="Anesigender" alt="feeling like a certain gender yet being more comfortable identifying with another">Anesigender</option>
            <option value="Angenital" alt="a desire to be without primary sexual characteristics, without necessarily being genderless; one may be both angenital and identify as any other gender alongside">Angenital</option>
            <option value="Anogender" alt="a gender that fades in and out but always comes back to the same feeling">Anogender</option>
            <option value="Anongender" alt="a gender that is unknown to both yourself and others">Anongender</option>
            <option value="Antegender" alt="a protean gender which has the potential to be anything, but is formless and motionless, and therefore, does not manifest as any particular gender">Antegender</option>
            <option value="Anxiegender" alt="a gender that is affected by anxiety">Anxiegender</option>
            <option value="Apagender" alt="a feeling of apathy towards ones gender which leads to them not looking any further into it">Apagender</option>
            <option value="Apconsugender" alt="a gender where you know what it isn’t, but not what it is; the gender is hiding itself from you">Apconsugender</option>
            <option value="Astergender" alt="a gender that feels bright and celestial">Astergender</option>
            <option value="Astralgender" alt="a gender that feels connected to space">Astralgender</option>
            <option value="Autigender" alt="a gender that can only be understood in the context of being autistic. Meant for autistic people only.">Autigender</option>
            <option value="Autogender" alt="a gender experience that is deeply personal to oneself">Autogender</option>
            <option value="Axigender" alt="when a person experiences two genders that sit on opposite ends of an axis; one being agender and the other being any other gender; these genders are experienced one at a time with no overlapping and with very short transition time.">Axigender</option>
            <option value="Bigender" alt="the feeling of having two genders either at the same time or separately; usually used to describe feeling “traditionally male” and “traditionally female”, but does not have to">Bigender</option>
            <option value="Biogender" alt="a gender that feels connected to nature in some way">Biogender</option>
            <option value="Blurgender" alt="the feeling of having more than one gender that are somehow blurred together to the point of not being able to distinguish or identify individual genders; synonymous with genderfuzz">Blurgender</option>
            <option value="Boyflux" alt="when one feels mostly or all male most of the time but experience fluctuating intensity of male identity">Boyflux</option>
            <option value="Burstgender" alt="and gender that comes in intense bursts of feeling and quickly fades back to the original state">Burstgender</option>
            <option value="Caelgender" alt="a gender which shares qualities with outer space or has the aesthetic of space, stars, nebulas, etc.">Caelgender</option>
            <option value="Cassgender" alt="the feeling of gender is unimportant to you">Cassgender</option>
            <option value="Cassflux" alt="when the level of indifference towards your gender fluctuates">Cassflux</option>
            <option value="Cavusgender" alt="for people with depression; when you feel one gender when not depressed and another when depressed">Cavusgender</option>
            <option value="Cendgender" alt="when your gender changes between one and its opposite">Cendgender</option>
            <option value="Ceterofluid" alt="when you are ceterogender and your feelings fluctuate between masculine, feminine, and neutral">Ceterofluid</option>
            <option value="Ceterogender" alt="a nonbinary gender with specific masculine, feminine, or neutral feelings">Ceterogender</option>
            <option value="Cisgender" alt="the feeling of being the gender you were assigned at birth, all the time (assigned (fe)male/feeling (fe)male)">Cisgender</option>
            <option value="Cloudgender" alt="a gender that cannot be fully realized or seen clearly due to depersonalization/derealization disorder">Cloudgender</option>
            <option value="Collgender" alt="the feeling of having too many genders simultaneously to describe each one">Collgender</option>
            <option value="Colorgender" alt="a gender associated with one or more colors and the feelings, hues, emotions, and/or objects associated with that color; may be used like pinkgender, bluegender, yellowgender">Colorgender</option>
            <option value="Commogender" alt="when you know you aren’t cisgender, but you settled with your assigned gender for the time being">Commogender</option>
            <option value="Condigender" alt="a gender that is only felt during certain circumstances">Condigender</option>
            <option value="Deliciagender" alt="from the Latin word delicia meaning “favorite”, meaning the feeling of having more than one simultaneous gender yet preferring one that fits better">Deliciagender</option>
            <option value="Demifluid" alt="the feeling your gender being fluid throughout all the demigenders; the feeling of having multiple genders, some static and some fluid">Demifluid</option>
            <option value="Demiflux" alt="the feeling of having multiple genders, some static and some fluctuating">Demiflux</option>
            <option value="Demigender" alt="a gender that is partially one gender and partially another">Demigender</option>
            <option value="Domgender" alt="having more than one gender yet one being more dominant than the others">Domgender</option>
            <option value="Demi-vapor" alt="Continuously drifting to other genders, feeling spiritually transcendental when doing so while having a clear -slightly blurred- inner visual of your genders, transitions, and positive emotions. Tied to Demi-Smoke.">Demi-vapor</option>
            <option value="Demi-smoke" alt="A transcendental, spiritual gender roughly drifting to other genders that are unable to be foreseen and understood, shrouded in darkness within your inner visual. Elevating through mystery. Caused by a lack of inner interpretation and dark emotional states. Tied to Demi-Vapor.">Demi-smoke</option>
            <option value="Duragender" alt="from the Latin word dura meaning “long-lasting”, meaning a subcategory of multigender in which one gender is more identifiable, long lasting, and prominent than the other genders">Duragender</option>
            <option value="Egogender" alt="a gender that is so personal to your experience that it can only be described as “you”">Egogender</option>
            <option value="Epicene" alt="sometimes used synonymously with the adjective “androgynous”; the feeling either having or not displaying characteristics of both or either binary gender; sometimes used to describe feminine male identifying individuals">Epicene</option>
            <option value="Espigender" alt="a gender that is related to being a spirit or exists on a higher or extradimensional plane">Espigender</option>
            <option value="Exgender" alt="the outright refusal to accept or identify in, on, or around the gender spectrum">Exgender</option>
            <option value="Existigender" alt="a gender that only exists or feels present when thought about or when a conscious effort is made to notice it">Existigender</option>
            <option value="Female" alt="one of two binary genders where one feels fully and completely female; can and is used in conjunction with other gender labels and identities">Female</option>
            <option value="Femfluid" alt="having fluctuating or fluid gender feelings that are limited to feminine genders">Femfluid</option>
            <option value="Femgender" alt="a nonbinary gender which is feminine in nature">Femgender</option>
            <option value="Fluidflux" alt="the feeling of being fluid between two or more genders that also fluctuate in intensity; a combination of genderfluid and genderflux">Fluidflux</option>
            <option value="Gemigender" alt="having two opposite genders that work together, being fluid and flux together">Gemigender</option>
            <option value="Genderblank" alt="a gender that can only be described as a blank space; when gender is called into question, all that comes to mind is a blank space">Genderblank</option>
            <option value="Genderflow" alt="a gender that is fluid between infinite feelings">Genderflow</option>
            <option value="Genderfluid" alt="the feeling of fluidity within your gender identity; feeling a different gender as time passes or as situations change; not restricted to any number of genders">Genderfluid</option>
            <option value="Genderflux" alt="the feeling of your gender fluctuating in intensity; like genderfluid but between one gender and agender">Genderflux</option>
            <option value="Genderfuzz" alt="coined by lolzmelmel; the feeling of having more than one gender that are somehow blurred together to the point of not being able to distinguish or identify individual genders; synonymous with blurgender">Genderfuzz</option>
            <option value="Gender" alt="the feeling of having a neutral gender, whether somewhere in between masculine and feminine or a third gender that is separate from the binary; often paired with neutrois">Gender</option>
            <option value="Genderpunk" alt="a gender identity that actively resists gender norms">Genderpunk</option>
            <option value="Genderqueer" alt="originally used as an umbrella term for nonbinary individuals; may be used as an identity; describes a nonbinary gender regardless of whether the individual is masculine or feminine leaning">Genderqueer</option>
            <option value="Genderwitched" alt="a gender in which one is intrigued or entranced by the idea of a particular gender, but is not certain that they are actually feeling it">Genderwitched</option>
            <option value="Girlflux" alt="when one feels mostly or all female most of the time but experiences fluctuating intensities of female identity">Girlflux</option>
            <option value="Glassgender" alt="a gender that is very sensitive and fragile">Glassgender</option>
            <option value="Glimragender" alt="a faintly shining, wavering gender">Glimragender</option>
            <option value="Greygender" alt="having a gender that is mostly outside of the binary but is weak and can barely be felt">Greygender</option>
            <option value="Gyragender" alt="having multiple genders but understanding none of them">Gyragender</option>
            <option value="Healgender" alt="a gender that once realized, brings lots of peace, clarity, security, and creativity to the individual’s mind">Healgender</option>
            <option value="Heliogender" alt="a gender that is warm and burning">Heliogender</option>
            <option value="Hemigender" alt="a gender that is half one gender and half something else; one or both halves may be identifiable genders">Hemigender</option>
            <option value="Horogender" alt="a gender that changes over time with the core feeling remaining the same">Horogender</option>
            <option value="Hydrogender" alt="a gender which shares qualities with water">Hydrogender</option>
            <option value="Imperigender" alt="a fluid gender that can be controlled by the individual">Imperigender</option>
            <option value="Intergender" alt="the feeling of gender falling somewhere on the spectrum between masculine and feminine. Meant for intersex people only">Intergender</option>
            <option value="Juxera" alt="a feminine gender similar to girl, but on a separate plane and off to itself">Juxera</option>
            <option value="Libragender" alt="a gender that feels agender but has a strong connection to another gender">Libragender</option>
            <option value="Male" alt="one of two binary genders where one feels fully and completely male; can and is used in conjunction with other gender labels and identities">Male</option>
            <option value="Magigender" alt="a gender that is mostly gender and the rest is something else">Magigender</option>
            <option value="Mascfluid" alt="A gender that is fluid in nature, and restricted only to masculine genders">Mascfluid</option>
            <option value="Mascgender" alt="a non-binary gender which is masculine in nature.">Mascgender</option>
            <option value="Maverique" alt="taken from the word maverick; the feeling of having a gender that is separate from masculinity, femininity, and neutrality, but is not agender; a form of third gender">Maverique</option>
            <option value="Mirrorgender" alt="a gender that changes to fit the people around you">Mirrorgender</option>
            <option value="Molligender" alt="a gender that is soft, subtle, and subdued">Molligender</option>
            <option value="Multigender" alt="the feeling of having more than one simultaneous or fluctuating gender; simultaneous with multigenderand omnigender">Multigender</option>
            <option value="Nanogender" alt="feeling a small part of one gender with the rest being something else">Nanogender</option>
            <option value="Neutrois" alt="the feeling of having a neutral gender; sometimes a lack of gender that leads to feeling neutral">Neutrois</option>
            <option value="Nonbinary" alt="originally an umbrella term for any gender outside the binary of cisgenders; may be used as an individual identity; occasionally used alongside of genderqueer">Nonbinary</option>
            <option value="Omnigender" alt="the feeling of having more than one simultaneous or fluctuating gender; simultaneous with multigenderand polygender">Omnigender</option>
            <option value="Oneirogender" alt="coined by anonymous, “being agender, but having recurring fantasies or daydreams of being a certain gender without the dysphoria or desire to actually be that gender day-to-day”">Oneirogender</option>
            <option value="Pangender" alt="the feeling of having every gender; this is considered problematic by some communities and thus has been used as the concept of relating in some way to all genders as opposed to containing every gender identity; only applies to genders within one’s own culture">Pangender</option>
            <option value="Paragender" alt="the feeling very near one gender and partially something else which keeps you from feeling fully that gender">Paragender</option>
            <option value="Perigender" alt="identifying with a gender but not as a gender">Perigender</option>
            <option value="Polygender" alt="the feeling of having more than one simultaneous or fluctuating gender; simultaneous with multigenderand omnigender">Polygender</option>
            <option value="Proxvir" alt="a masculine gender similar to boy, but on a separate plane and off to itself">Proxvir</option>
            <option value="Quoigender" alt="feeling as if the concept of gender is inapplicable or nonsensical to one’s self">Quoigender</option>
            <option value="Subgender" alt="mostly agender with a bit of another gender">Subgender</option>
            <option value="Surgender" alt="having a gender that is 100% one gender but with more of another gender added on top of that">Surgender</option>
            <option value="Systemgender" alt="a gender that is the sum of all the genders within a multiple or median system">Systemgender</option>
            <option value="Tragender" alt="a gender that stretches over the whole spectrum of genders">Tragender</option>
            <option value="Transgender" alt="any gender identity that transcends or does not align with your assigned gender or society’s idea of gender; the feeling of being any gender that does not match your assigned gender">Transgender</option>
            <option value="Transneutral" alt="A term used to describe transgender people who were assigned male or female at birth, but identify with neutral gendered feelings to a greater extent than with femininity or masculinity. It is used the same way as “transfeminine” or “transmasculine”, but for neutral feelings. It can be used to describe gendered feelings, or as a gender itself.">Transneutral</option>
            <option value="Trigender" alt="the feeling of having three simultaneous or fluctuating genders">Trigender</option>
            <option value="Vapogender" alt="a gender that sort of feels like smoke; can be seen on a shallow level but once you go deeper, it disappears and you are left with no gender and only tiny wisps of what you thought it was">Vapogender</option>
            <option value="Venngender" alt="when two genders overlap creating an entirely new gender; like a venn diagram">Venngender</option>
            <option value="Verangender" alt="a gender that seems to shift/change the moment it is identified">Verangender</option>
            <option value="Vibragender" alt="a gender that is usually one stable gender but will occasionally changes or fluctuate before stabilizing again">Vibragender</option>
            <option value="Vocigender" alt="a gender that is weak or hollow">Vocigender</option>

          </select>
          <small className='form-text'>
            Give us an idea of your mentality
          </small>
        </div>
        <div className='form-group'>
          <input type='text' placeholder='Location' name='location' value={location} onChange={e => onChange(e)}/>
        </div>
        <div className='form-group'>
        <select name='status' value={status} onChange={e => onChange(e)}>
            <option value='0'>* Select your Status</option>
            <option value="Married" alt="Married">Married</option>
            <option value="Engaged" alt="Engaged">Engaged</option>
            <option value="Milf" alt="Mother with one or more childs">Milf</option>
            <option value="Gilf" alt="Grandmother with childs and grandchilds">Gilf</option>
            <option value="Widow" alt="Ex-Married due to diseased individuals">Widow</option>
            <option value="Divorced" alt="Divorced with child">Divorced</option>
            <option value="Open Relationship" alt="Open Relationship">Open Relationship</option>
            <option value="Single" alt="Married">Single</option>
        </select>
          <small className='form-text'>
            What exactly do you desire?
          </small>
        </div>
        <div className='form-group'>
          <input 
          type="text" 
          placeholder='* Sexual Preferences'
          name='sex_preferences'
          value={sex_preferences}
          onChange={e => onChange(e)}/>

          <small className='form-text'>
            Pick your Poison (eg. Bondage, BDSM, Missionary,)
          </small>
        </div>
        

        <div className='my-2'>
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type='button'
            className='btn btn-light'
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>
        {displaySocialInputs && (
          <Fragment>
            <div className='form-group social-input'>
              <i className='fab fa-twitter fa-2x'></i>
              <input type='text' placeholder='Twitter URL' name='twitter' />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x'></i>
              <input type='text' placeholder='Facebook URL' name='facebook' />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-youtube fa-2x'></i>
              <input type='text' placeholder='YouTube URL' name='youtube' />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-linkedin fa-2x'></i>
              <input type='text' placeholder='Linkedin URL' name='linkedin' />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x'></i>
              <input type='text' placeholder='Instagram URL' name='instagram' />
            </div>
          </Fragment>
        )}

        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};


export default connect(null, {createProfile})(withRouter(CreateProfile));
