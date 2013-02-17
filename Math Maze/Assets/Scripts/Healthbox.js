#pragma strict

var pickUpSound : AudioClip;

function OnTriggerEnter(other:Collider)
{
	if(other.tag == "Player")
	{
		AudioSource.PlayClipAtPoint(pickUpSound, transform.position);
		PlayerStats.changeHP(25);
		collider.enabled = false;
    	renderer.enabled = false;
	}  
}