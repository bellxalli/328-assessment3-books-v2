window.onload = async () => {
    try
    {
        const response = await fetch('/api/reviews/getPets', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title,reviewer, stars, comments})
        });
        const data = await response.json();
        await loadReviews(data);
    }
    catch
    {
        console.error("error in retieving data", error);
    }    
}

async function loadReviews(reviews)
{
    const b = document.querySelector("#review-list");
    b.innerHTML = "";

    for(const r in reviews)
    {
        const table = document.createLElement('tr');
        table.innerHTML = `<tr>
        <td>${r.reviewer}</td>
        <td>${r.title}</td>
        <td>${r.stars}</td>
        <td>${r.comments}</td>
        </tr>`

        b.appendChild(table);
    }
}