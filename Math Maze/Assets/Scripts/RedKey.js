#pragma strict

var pickUpSound : AudioClip;

function OnTriggerEnter(other:Collider)
{
	if(other.tag == "Player")
	{
		AudioSource.PlayClipAtPoint(pickUpSound, transform.position);
		PlayerStats.getRedKey();
		collider.enabled = false;
    	renderer.enabled = false;
	}  
}