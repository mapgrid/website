<style>
    main {
        @apply h-full flex items-center;
        @apply bg-gray-800;
    }

    .wrapper {
        @apply mx-auto max-w-lg -mt-64;
    }

    img {
        @apply mx-auto w-32 mb-8;
        @apply rounded-full border-4;
        @apply bg-alpha-light-100 border-alpha-light-100;
    }

    h1 {
        @apply text-5xl text-center font-header uppercase font-medium;
        @apply text-alpha-light-100;
    }

    .inner {
        @apply px-8 py-8;
        @apply border-t-8 shadow-md rounded-lg overflow-hidden font-ui;
        @apply bg-white border-blue-800;
    }

    h4 {
        @apply mb-1;
        @apply text-xl font-medium;
        @apply text-alpha-dark-900;
    }

    p {
        @apply mb-4;
        @apply text-alpha-dark-600;
    }
</style>

<script>
    import Signup from '@mapgrid/elements/referrals/Component.svelte'
</script>

<main>
    <div class="wrapper">
        <img src="/logo-512.png" alt="MapGrid" />
        <h1>MapGrid is coming</h1>
        <div class="inner">
            <h4>Sign up for early access</h4>
            <p>Get on our pre-launch waitlist by signing up below, and we'll give you early access when we launch.</p>
            <Signup
                title="Enter your email"
                button="Sign Up"
                endpoint={process.env.REFERRALS_ENDPOINT}
                url="https://mapgrid.org"
            />
        </div>
    </div>
</main>
