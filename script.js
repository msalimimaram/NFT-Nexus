// Theme Toggle
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = themeToggle.querySelector('i');
        
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('light-theme');
            
            if (document.body.classList.contains('light-theme')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        });

        // Mobile Menu Toggle
        document.querySelector('.menu-toggle').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                document.querySelector('.nav-links').classList.remove('active');
            });
        });

        // FAQ Accordion
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', function() {
                const item = this.parentNode;
                item.classList.toggle('active');
            });
        });

        // Profit Calculator
        function calculateProfit() {
            const purchasePrice = parseFloat(document.getElementById('purchasePrice').value) || 0;
            const salePrice = parseFloat(document.getElementById('salePrice').value) || 0;
            const gasFees = parseFloat(document.getElementById('gasFees').value) || 0;
            const platformFee = parseFloat(document.getElementById('platformFee').value) || 0;
            
            const platformFeeAmount = salePrice * (platformFee / 100);
            const totalCosts = purchasePrice + gasFees + platformFeeAmount;
            const profit = salePrice - totalCosts;
            
            document.getElementById('profitResult').textContent = profit.toFixed(2) + ' ETH';
        }
        
        // Add event listeners to calculator inputs
        document.querySelectorAll('.calculator-form input').forEach(input => {
            input.addEventListener('input', calculateProfit);
        });
        
        // Initialize calculator
        calculateProfit();

        // Crypto Price Updates (simulated)
        function updateCryptoPrices() {
            const prices = {
                btc: 41230.50,
                eth: 2845.20,
                usdt: 1.00,
                usdc: 1.00,
                sol: 102.45
            };
            
            // Simulate price changes
            const changePercent = (Math.random() - 0.5) * 0.1; // -5% to +5%
            
            Object.keys(prices).forEach(key => {
                const newPrice = prices[key] * (1 + changePercent);
                const element = document.getElementById(`${key}-price`);
                
                if (element) {
                    element.textContent = '$' + newPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
                    
                    // Update change indicator
                    const changeElement = element.parentNode.querySelector('.crypto-change');
                    if (changePercent > 0) {
                        changeElement.textContent = '+' + (changePercent * 100).toFixed(2) + '%';
                        changeElement.className = 'crypto-change positive';
                    } else if (changePercent < 0) {
                        changeElement.textContent = (changePercent * 100).toFixed(2) + '%';
                        changeElement.className = 'crypto-change negative';
                    } else {
                        changeElement.textContent = '0.00%';
                        changeElement.className = 'crypto-change';
                    }
                }
            });
        }
        
        // Update prices every 30 seconds
        setInterval(updateCryptoPrices, 30000);

        // Back to Top Button
        const backToTopButton = document.getElementById('backToTop');

        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Header Style Change on Scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if(window.scrollY > 100) {
                header.style.padding = '10px 0';
                header.style.boxShadow = 'var(--shadow-lg)';
            } else {
                header.style.padding = '20px 0';
                header.style.boxShadow = 'var(--shadow)';
            }
        });

        // Newsletter Form Submission
        document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const input = this.querySelector('input');
            
            if(input.value) {
                // In a real application, you would send this to a server
                console.log('Newsletter subscription:', input.value);
                
                // Show success message
                alert('Thank you for subscribing to our newsletter!');
                
                // Clear input
                input.value = '';
            }
        });

        // NFT Card Hover Effects
        document.querySelectorAll('.nft-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });