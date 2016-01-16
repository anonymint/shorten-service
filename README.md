# Shorten URL Microservice

You pass in the URL you want to shorten and you can get a shorten version of it.

To Shorten just pass url with protocal `http` or `https` otherwise you will get error result invalid url

`/shorten/URL` for example `/shorten/https://www.google.com`

Result

```
{
	original_url: "https://google.com",
	short_url: "LOCALHOST:PORT/SHORTEN_STRING"
}
```

